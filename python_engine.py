import sys
from transformers import pipeline
summarization = pipeline("summarization")
mode = sys.argv[1]
strength = sys.argv[2]
max_len = sys.argv[3]
input_text = sys.argv[4]
summary_text = summarization(input_text)
print(summary_text)