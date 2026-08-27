try:
    import PyPDF2  # type: ignore
except ImportError:
    PyPDF2 = None

# Open and read the PDF
pdf_path = "public/resume.pdf"

if PyPDF2 is None:
    print("PyPDF2 is not installed in this environment. Install it with 'pip install PyPDF2' to extract resume text.")
else:
    try:
        with open(pdf_path, 'rb') as file:
            pdf_reader = PyPDF2.PdfReader(file)
            print(f"Total pages: {len(pdf_reader.pages)}")
            print("\n" + "="*80)
            print("RESUME CONTENT:")
            print("="*80 + "\n")
            
            # Extract text from all pages
            full_text = ""
            for page_num, page in enumerate(pdf_reader.pages):
                text = page.extract_text() or ""
                full_text += text + "\n"
                print(f"--- PAGE {page_num + 1} ---")
                print(text)
                print("\n")
            
            # Save to a text file for reference
            with open("resume_extracted.txt", "w", encoding="utf-8") as f:
                f.write(full_text)
            
            print("="*80)
            print("✓ Resume content extracted and saved to resume_extracted.txt")
    except FileNotFoundError:
        print(f"Error: Could not find {pdf_path}")
    except (OSError,) as e:
        print(f"Error reading PDF: {str(e)}")
