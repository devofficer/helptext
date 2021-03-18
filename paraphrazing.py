from transformers import T5ForConditionalGeneration,T5Tokenizer
import torch


def set_seed(seed):
  torch.manual_seed(seed)
  if torch.cuda.is_available():
    torch.cuda.manual_seed_all(seed)

set_seed(42)

model = T5ForConditionalGeneration.from_pretrained('ramsrigouthamg/t5_paraphraser')
tokenizer = T5Tokenizer.from_pretrained('t5-base')

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
print ("device ",device)
model = model.to(device)

sentence = "There was something in the closet so i had to be careful"

text =  "paraphrase: " + sentence + " </s>"


max_len = 256

encoding = tokenizer.encode_plus(text,pad_to_max_length=True, return_tensors="pt")
input_ids, attention_masks = encoding["input_ids"].to(device), encoding["attention_mask"].to(device)


beam_outputs = model.generate(
    input_ids=input_ids, attention_mask=attention_masks,
    do_sample=True,
    max_length=256,
    top_k=120,
    top_p=0.98,
    early_stopping=True,
    num_return_sequences=5 # Number of sentences to return
)

print(f"Sentence: {sentence}")

print("Paraphrase: ")

for i,line in enumerate(beam_outputs):
  paraphrase = tokenizer.decode(line,skip_special_tokens=True,clean_up_tokenization_spaces=True)
  print(f"{i+1}. {paraphrase}")