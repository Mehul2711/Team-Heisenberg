import os
# replace this with your HF key
os.environ["HUGGINGFACE_ACCESS_TOKEN"] = "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"

from embedchain import App
app = App.from_config("mistral.yaml")
app.add("https://www.healthdirect.gov.au/health-topics/symptoms")
app.add("https://www.webmd.com/")
app.query("How to handle botulism and it's symptoms?")
# Answer: The net worth of Elon Musk today is $258.7 billion.
