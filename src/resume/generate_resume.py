#!/usr/bin/env python3
"""
Generate William Wei Ming's resume matching resume_origin.pdf style.
Skills + Experience sourced from portfolio.ts; Education included.
Exactly 1 page, content filling the page.
"""

from pathlib import Path

from weasyprint import HTML

ROOT = Path(__file__).resolve().parents[2]
RESUME_DIR = Path(__file__).resolve().parent
HTML_PATH = RESUME_DIR / "resume.html"
PDF_PATH = RESUME_DIR / "resume.pdf"
PUBLIC_PDF = ROOT / "public" / "files" / "resume.pdf"
DOCX_PATH = RESUME_DIR / "resume.docx"

BLUE = "#5B9BD4"
TITLE_GRAY = "#44546A"
BODY = "#404040"
MUTED = "#A5A5A5"
LINK = "#0000FF"
BLACK = "#000000"


def build_html() -> str:
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<title>William Wei Ming — Resume</title>
<style>
  @page {{
    size: A4;
    margin: 7.5mm 10mm 6.5mm 10mm;
  }}

  * {{ box-sizing: border-box; margin: 0; padding: 0; }}

  body {{
    font-family: "Times New Roman", Times, serif;
    color: {BODY};
    font-size: 8.7pt;
    line-height: 1.2;
  }}

  a {{ color: {LINK}; text-decoration: none; }}

  .header {{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 2px;
  }}
  .header-left h1 {{
    font-size: 14.8pt;
    font-weight: 400;
    color: {BLACK};
    line-height: 1.08;
    margin-bottom: 1px;
  }}
  .header-left .role {{
    font-size: 9.6pt;
    color: {TITLE_GRAY};
    line-height: 1.12;
  }}
  .header-right {{
    font-size: 8.4pt;
    line-height: 1.26;
    color: {BODY};
  }}
  .header-right .label {{
    font-weight: 700;
    color: {BLACK};
  }}

  .rule {{
    border: none;
    border-top: 1.08pt solid {BLUE};
    margin: 3.5px 0 3.5px;
  }}

  .highlights {{
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    margin: 0 10px 0;
    font-size: 8.5pt;
  }}
  .highlights ul {{ list-style: none; }}
  .highlights li {{
    padding-left: 10px;
    position: relative;
    margin-bottom: 0.2px;
  }}
  .highlights li::before {{
    content: "-";
    position: absolute;
    left: 0;
  }}

  h2 {{
    font-size: 10.6pt;
    font-weight: 400;
    color: {BLACK};
    margin: 0;
  }}

  .skills {{
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 24px;
    margin-top: 2px;
  }}
  .skill-group {{ margin-bottom: 3.5px; }}
  .skill-group h3 {{
    font-size: 9.1pt;
    font-weight: 700;
    color: {BODY};
    margin-bottom: 0.5px;
  }}
  .skill-group ul {{
    list-style: disc;
    padding-left: 14px;
  }}
  .skill-group li {{
    font-size: 8.4pt;
    margin-bottom: 0.15px;
    color: {BODY};
  }}
  .skill-group li strong {{
    font-weight: 700;
  }}

  .job {{ margin-top: 4px; }}
  .job-row {{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 8px;
  }}
  .job-title {{
    font-size: 9.3pt;
    color: {TITLE_GRAY};
  }}
  .job-date {{
    font-size: 8.3pt;
    color: {MUTED};
    white-space: nowrap;
  }}
  .job-company {{
    font-size: 8.3pt;
    color: {MUTED};
  }}
  .job-loc {{
    font-size: 8.3pt;
    color: {MUTED};
    white-space: nowrap;
  }}
  .job ul {{
    list-style: none;
    margin-top: 1px;
  }}
  .job li {{
    font-size: 8.4pt;
    color: {BODY};
    padding-left: 10px;
    position: relative;
    margin-bottom: 0.4px;
    text-align: justify;
  }}
  .job li::before {{
    content: "-";
    position: absolute;
    left: 0;
  }}
  .job li strong {{
    font-weight: 700;
    color: {BLACK};
  }}

  .edu {{
    margin-top: 3px;
  }}
  .edu-degree {{
    font-size: 8.6pt;
    color: {MUTED};
  }}
  .edu-school {{
    font-size: 9.3pt;
    font-weight: 700;
    color: {BODY};
  }}
  .edu-year {{
    font-size: 8.3pt;
    color: {MUTED};
    white-space: nowrap;
  }}
</style>
</head>
<body>

  <div class="header">
    <div class="header-left">
      <h1>William Wei Ming</h1>
      <div class="role">Senior Full-Stack Engineer | AI Backend | Open Source Miner</div>
    </div>
    <div class="header-right">
      <div><span class="label">Website</span> : <a href="https://williamweiming.com">https://williamweiming.com</a></div>
      <div><span class="label">Email</span> : <a href="mailto:weimingwilliam6@gmail.com">weimingwilliam6@gmail.com</a></div>
      <div><span class="label">GitHub</span> : <a href="https://github.com/bittensorrider">https://github.com/bittensorrider</a></div>
      <div><span class="label">LinkedIn</span> : <a href="https://www.linkedin.com/in/william-ming-476240419/">https://www.linkedin.com/in/william-ming-476240419</a></div>
    </div>
  </div>

  <hr class="rule"/>

  <div class="highlights">
    <ul>
      <li>Backend Developer &amp; AI Engineer · 8+ Years</li>
      <li>Microservices, REST APIs &amp; Distributed Systems</li>
      <li>Cloud-Native Apps with Python, Java &amp; Node.js</li>
      <li>LLM Integration, RAG &amp; Vector Databases</li>
      <li>Generative AI &amp; Intelligent Automation</li>
    </ul>
    <ul>
      <li>Secure, Scalable &amp; Maintainable Solutions</li>
      <li>Lead Projects from Concept to Production</li>
      <li>Open Source Miner · Remote Contractor</li>
      <li>Based in Selangor, Malaysia</li>
    </ul>
  </div>

  <hr class="rule"/>

  <h2>SKILLS</h2>
  <hr class="rule"/>

  <div class="skills">
    <div>
      <div class="skill-group">
        <h3>Mobile / Desktop Apps</h3>
        <ul>
          <li>Android, Java, Kotlin</li>
          <li>iOS, Swift</li>
          <li>React Native, Ionic Framework, Flutter, Dart, Electron</li>
          <li>C++, C#</li>
        </ul>
      </div>
      <div class="skill-group">
        <h3>Web</h3>
        <ul>
          <li>React, Next.js, Vue, Nuxt.js, Tailwind CSS</li>
          <li>Laravel, CodeIgniter, WordPress, Magento 2</li>
          <li>Django, Flask, FastAPI, SpringBoot, REST APIs</li>
          <li>AWS, Firebase, Supabase, n8n</li>
          <li>PostgreSQL, MySQL, MongoDB, Redis</li>
          <li>Docker, Kubernetes, Cloudflare, Nginx</li>
          <li>Web3, DeFi, Cryptocurrency</li>
        </ul>
      </div>
    </div>
    <div>
      <div class="skill-group">
        <h3>Artificial Intelligence</h3>
        <ul>
          <li><strong>Bittensor</strong>, PyTorch, TensorFlow, Keras, YOLO</li>
          <li>Hugging Face, LLM, RAG, Rasa</li>
          <li>LangChain, LangGraph, LlamaIndex</li>
          <li>Vector Databases, pgvector, PostgreSQL</li>
          <li>Prompt Engineering, Prompt Injection, Loop Engineering</li>
          <li>Anthropic, Claude, OpenAI, Gemini, Mistral, Ollama</li>
          <li>FastAPI, gRPC</li>
        </ul>
      </div>
      <div class="skill-group">
        <h3>Tools</h3>
        <ul>
          <li>Cursor, Claude, VS Code, Visual Studio</li>
          <li>Android Studio, Xcode</li>
          <li>Docker Desktop, Postman, Google Chrome</li>
          <li>Figma, Adobe Photoshop, Git, Vercel</li>
          <li>Trello, Notion, Jira</li>
          <li>Slack, Discord, WhatsApp, MS Teams</li>
        </ul>
      </div>
    </div>
  </div>

  <h2>EXPERIENCE</h2>
  <hr class="rule"/>

  <div class="job">
    <div class="job-row">
      <div class="job-title">Open Source Miner &amp; Contributor</div>
      <div class="job-date">2026.4 - Present</div>
    </div>
    <div class="job-row">
      <div class="job-company">Bittensor Network - SN74 Gittensor</div>
      <div class="job-loc"></div>
    </div>
    <ul>
      <li>Mining on Bittensor's SN74 Gittensor subnet by contributing merged PRs to whitelisted open source repositories, earning TAO alpha token emissions based on code quality and credibility scores.</li>
      <li>Contributed bug fixes and feature improvements to hot repositories — <strong>18 merged PRs across Sure v0.7.1–v0.7.4</strong>, ranking <strong>#11</strong> on the Gittensor leaderboard for v0.7.4 with 11 merged PRs (transfer tags, transaction rule operators, N+1 query fixes, Design System &amp; i18n cleanups).</li>
      <li>Managed Bittensor wallet infrastructure using btcli, including coldkey/hotkey configuration, TAO deposits, and subnet registration on the Bittensor mainnet.</li>
    </ul>
  </div>

  <div class="job">
    <div class="job-row">
      <div class="job-title">Senior AI Backend Engineer</div>
      <div class="job-date">2025 - 2026</div>
    </div>
    <div class="job-row">
      <div class="job-company">ABC Digital Solutions Sdn Bhd</div>
      <div class="job-loc">Malaysia</div>
    </div>
    <ul>
      <li>Designed and developed AI-powered backend services using Python, FastAPI, and LangChain.</li>
      <li>Implemented Retrieval-Augmented Generation (RAG) solutions utilizing vector databases and large language models.</li>
      <li>Built scalable microservices architecture deployed on AWS using Docker and Kubernetes.</li>
    </ul>
  </div>

  <div class="job">
    <div class="job-row">
      <div class="job-title">Senior AI Backend Engineer</div>
      <div class="job-date">2024.1 - 2025.3</div>
    </div>
    <div class="job-row">
      <div class="job-company">ABC Digital Solutions Sdn Bhd</div>
      <div class="job-loc">Malaysia</div>
    </div>
    <ul>
      <li>Developed secure RESTful APIs supporting over 500,000 monthly transactions.</li>
      <li>Optimized backend performance, reducing API response times by 40%.</li>
      <li>Integrated OpenAI and enterprise AI models into customer-facing applications.</li>
      <li>Led a team of 6 engineers delivering AI automation projects across finance and e-commerce sectors.</li>
    </ul>
  </div>

  <div class="job">
    <div class="job-row">
      <div class="job-title">Backend Software Engineer (Remote)</div>
      <div class="job-date">2021.1 - 2023.12</div>
    </div>
    <div class="job-row">
      <div class="job-company">TechVision Systems Sdn Bhd</div>
      <div class="job-loc">Malaysia</div>
    </div>
    <ul>
      <li>Developed enterprise backend systems using Java Spring Boot and PostgreSQL.</li>
      <li>Designed microservices and event-driven architectures supporting high-volume transactions.</li>
      <li>Built API integrations with payment gateways, ERP systems, and third-party platforms.</li>
      <li>Implemented CI/CD pipelines using Jenkins, Docker, and GitLab; reduced infrastructure costs by 25% via containerization.</li>
    </ul>
  </div>

  <div class="job">
    <div class="job-row">
      <div class="job-title">Software Engineer (Remote)</div>
      <div class="job-date">2018.6 - 2020.12</div>
    </div>
    <div class="job-row">
      <div class="job-company">Innovate Technologies, Inc.</div>
      <div class="job-loc">Malaysia</div>
    </div>
    <ul>
      <li>Developed web applications and backend services using Python, Node.js, and MySQL.</li>
      <li>Created REST APIs for mobile and web applications; built reporting and analytics modules for BI platforms.</li>
      <li>Automated manual workflows, improving operational efficiency by 30%; maintained security, DB performance, and availability.</li>
    </ul>
  </div>

  <div class="job">
    <div class="job-row">
      <div class="job-title">Freelance Web Developer</div>
      <div class="job-date">2017.9 - 2018.5</div>
    </div>
    <div class="job-row">
      <div class="job-company">CrowdWorks.jp</div>
      <div class="job-loc">Japan</div>
    </div>
    <ul>
      <li>Developed and delivered custom web applications for Japanese clients through <strong>CrowdWorks.jp</strong>, focusing on responsive UI and performance optimization.</li>
      <li>Collaborated remotely with Japanese clients to translate business requirements into scalable technical solutions.</li>
      <li>Successfully completed multiple freelance projects (Fixed and Hourly) while maintaining high client satisfaction and meeting strict deadlines.</li>
    </ul>
  </div>

  <div class="job">
    <div class="job-row">
      <div class="job-title">Junior Freelance Web Developer</div>
      <div class="job-date">2015.11 - 2017.7</div>
    </div>
    <div class="job-row">
      <div class="job-company">Upwork.com</div>
      <div class="job-loc">United States</div>
    </div>
    <ul>
      <li>Worked as a junior freelancer on <strong>Upwork.com</strong>, contributing to website development, bug fixing, and UI enhancements across multiple client projects.</li>
      <li>Assisted in translating client ideas into functional web solutions using the MEAN stack; gained experience in remote collaboration and agile practices.</li>
    </ul>
  </div>

  <h2>EDUCATION</h2>
  <hr class="rule"/>

  <div class="edu">
    <div class="edu-degree">Bachelor of Science (Hons) in Computer Science</div>
    <div class="job-row">
      <div class="edu-school">University Malaysia of Computer Science &amp; Engineering (UNIMY)</div>
      <div class="edu-year">2012 - 2015</div>
    </div>
  </div>

</body>
</html>
"""


def main():
    html = build_html()
    HTML_PATH.write_text(html, encoding="utf-8")
    HTML(string=html, base_url=str(RESUME_DIR)).write_pdf(PDF_PATH)
    PUBLIC_PDF.parent.mkdir(parents=True, exist_ok=True)
    PUBLIC_PDF.write_bytes(PDF_PATH.read_bytes())

    try:
        import subprocess

        subprocess.run(
            ["pandoc", str(HTML_PATH), "-o", str(DOCX_PATH)],
            check=False,
            capture_output=True,
        )
    except Exception as e:
        print("DOCX skip:", e)

    import fitz

    doc = fitz.open(PDF_PATH)
    pages = doc.page_count
    page = doc[0]
    blocks = page.get_text("blocks")
    max_y = max(b[3] for b in blocks) if blocks else 0
    height = page.rect.height
    print(f"Wrote {PDF_PATH}")
    print(f"Wrote {PUBLIC_PDF}")
    print(f"pages={pages} content_bottom={max_y:.1f}/{height:.1f} fill={max_y/height*100:.1f}%")

    if pages != 1:
        print("WARNING: not 1 page — tighten further")
        for i, p in enumerate(doc):
            print(f"--- page {i+1} last lines ---")
            bs = sorted(p.get_text("blocks"), key=lambda x: x[1])
            for b in bs[-3:]:
                print(" ".join(b[4].split())[:100])


if __name__ == "__main__":
    main()
