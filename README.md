
# 📄➡️🎥 Research Paper to Video Conversion

This project converts **research papers (PDFs)** into **video summaries** by combining **Natural Language Processing (NLP)** with **speech synthesis**.  
It extracts key sections from academic papers, summarizes them into narration-ready text, and generates videos with synchronized slides and audio.

---

## 🔑 Features
- **PDF Preprocessing**
  - Extracts text from research papers using PyPDF2  
  - Splits content into sections (abstract, methods, results, etc.)  

- **NLP Summarization**
  - Uses **BERT** (fine-tuned / zero-shot) to identify key sections  
  - Applies **TextRank** for extractive summarization of important sentences  

- **Speech Synthesis**
  - Generates natural narration using **Tacotron 2** (via [Coqui TTS](https://github.com/coqui-ai/TTS))  

- **Video Generation**
  - Builds simple slide-based videos with narration using **MoviePy**  
  - Supports auto-generation of 3 key slides: *Paper Summary, Methods, Results*  

---

## 📊 Pipeline Overview
1. **Upload a research paper PDF**  
2. **Preprocess text** → paragraphs + section tagging (BERT / zero-shot classifier)  
3. **Summarize** with TextRank → narration text  
4. **Convert to speech** with Tacotron 2 → audio narration (`.wav`)  
5. **Generate video** with slides + synchronized narration (`.mp4`)  

---

## 🚀 Getting Started (Colab)

Open the notebook in [Google Colab](https://colab.research.google.com/) and run step by step:

```bash
# Install dependencies
pip install PyPDF2 transformers torch datasets networkx scikit-learn TTS moviepy
