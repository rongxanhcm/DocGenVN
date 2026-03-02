# 🎓 Luana — AI Academic Writing Assistant

Generate complete academic documents with AI. Input your topic → Choose templates → Get full Word documents in minutes.

**Luana** is an intelligent assistant that writes full academic papers, theses, reports and assignments using Claude AI. Perfect for universities, colleges, and research institutions.

![Status](https://img.shields.io/badge/status-beta-blue?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)
![Powered by Claude](https://img.shields.io/badge/Powered%20by-Claude%20AI-purple?style=flat-square)

---

## 🚀 Features

✨ **AI-Powered Writing**
- Generate complete academic documents using Claude 3 AI
- Intelligent structure parsing and content generation
- Support for Vietnamese academic standards

📋 **Multiple Document Types**
- Luận văn (Thesis) - 3-chapter format
- Đồ án (Project Reports) - Technical structure with 6 chapters
- Tiểu luận (Essays) - Concise format
- Thực tập (Internship Reports) - Real-world experience format
- Báo cáo (Reports) - Summary-based structure
- Nghiên cứu (Research Papers) - Full academic format

🎨 **Template System**
- 6 pre-built templates for different document types
- Customizable structure for unique requirements
- One-click template loading with smart auto-detection

📄 **Document Export**
- Generate .docx files with proper formatting
- Custom fonts (Times New Roman, Calibri, etc.)
- Configurable margins and line spacing
- Optional logo and README embedding
- Compliant with Vietnamese university standards

⚙️ **Format Presets**
- Chuẩn đại học VN (Standard Vietnamese University)
- Bách Khoa format
- UEH / NEU format
- Custom formatting options

🎯 **Smart Features**
- Real-time character counters with warnings
- Structure preview before generation
- Multi-step progress tracking
- File upload for README context and logos
- Live structure parsing visualization

---

## 🛠 Tech Stack

**Frontend**
- Vanilla HTML5/CSS3/JavaScript (no frameworks!)
- Responsive design (mobile, tablet, desktop)
- Modern CSS with gradients and animations

**Backend**
- Vercel Serverless Functions (Node.js)
- Claude 3 AI API for content generation

**Libraries**
- `docx@8.5.0` - Generate Word documents (.docx)
- `FileSaver.js@2.0.5` - Browser file downloads
- Google Fonts (Lora, IBM Plex Sans Thai, IBM Plex Mono)

**Infrastructure**
- Vercel Hosting (automatically scales)
- Git-based deployments
- Environment variables for secure API keys

---

## 📦 Project Structure

```
f:\docgen-vn/
├── public/
│   ├── index.html              ← Main application
│   ├── css/                    ← Modular stylesheets
│   │   ├── variables.css       ← Theme colors & typography
│   │   ├── base.css            ← Layout & responsive design
│   │   ├── header.css          ← Header & navigation
│   │   ├── forms.css           ← Input fields & validation
│   │   ├── buttons.css         ← Button styles & presets
│   │   ├── components.css      ← Upload, progress, results
│   │   └── animations.css      ← Keyframe animations
│   ├── js/                     ← Modular JavaScript
│   │   ├── config.js           ← Format presets configuration
│   │   ├── validation.js       ← Form validation logic
│   │   ├── upload.js           ← File upload handlers
│   │   ├── structure-parser.js ← Template definitions
│   │   ├── word-generator.js   ← .docx generation
│   │   ├── api.js              ← Claude API calls
│   │   ├── ui.js               ← UI updates & interactions
│   │   └── main.js             ← App initialization
│   ├── luana.svg               ← Brand logo
│   └── ICON-README.md          ← Icon documentation
├── api/
│   └── generate.js             ← Vercel serverless function
├── vercel.json                 ← Vercel configuration
└── README.md                   ← This file
```

---

## 💻 Installation & Local Setup

### Prerequisites
- Node.js 16+ (for local testing)
- Git
- GitHub account
- Claude API key (free tier available)

### Steps

**1. Clone the repository**
```bash
git clone https://github.com/yourusername/luana.git
cd luana
```

**2. Set up environment variables**
Create a `.env.local` file in the project root:
```env
ANTHROPIC_API_KEY=sk-ant-your-key-here
```

Get your free API key from [console.anthropic.com](https://console.anthropic.com)

**3. Test locally (optional)**
```bash
npm install
npm run dev
```

Visit `http://localhost:3000`

---

## 🌐 Deployment to Vercel

### One-Click Deploy (Easiest)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fluana&env=ANTHROPIC_API_KEY)

### Manual Deploy (5 minutes)

**Step 1: Push to GitHub**
```bash
git add .
git commit -m "Deploy to Vercel"
git push origin main
```

**Step 2: Create Vercel account**
- Go to [vercel.com](https://vercel.com)
- Sign up with GitHub (free)

**Step 3: Import project**
1. Click "Add New" → "Project"
2. Select your GitHub repository
3. Click "Import"

**Step 4: Add API Key**
1. After import, go to **Settings** → **Environment Variables**
2. Add:
   - Name: `ANTHROPIC_API_KEY`
   - Value: Your key from console.anthropic.com
3. Click "Save"
4. Go to **Deployments** → Click **Redeploy**

**Step 5: Done!**
Your app is now live at `https://luana.vercel.app`

---

## 🎯 Usage Guide

### For Users

**1. Choose Document Type**
   - Select from 6 templates or use custom structure
   - Auto-loads relevant template

**2. Fill in Information**
   - Topic (required)
   - University name
   - Faculty, student info, supervisor (optional)
   - README file (optional - for AI context)
   - Custom logo (optional)

**3. Define Structure**
   - Use template buttons for quick structure
   - Or write custom chapter outline
   - Preview structure in real-time

**4. Configure Format**
   - Choose preset format (Standard, Bách Khoa, UEH)
   - Or customize margins, fonts, spacing
   - Set line spacing and spacing after

**5. Generate**
   - Click "Tạo tài liệu"
   - Watch progress: Parsing → Generating → Building
   - Download .docx file when complete

### For Developers

**Add new template:**
Edit `public/js/structure-parser.js`:
```javascript
function getDefaultStructure(docType) {
  const structures = {
    my_new_type: `Mở đầu
Chương 1: ...
Kết luận`
    // Add your template here
  };
}
```

**Customize format presets:**
Edit `public/js/config.js`:
```javascript
const PRESETS = {
  my_format: {
    font: 'Times New Roman',
    size: 13,
    // ... more settings
  }
};
```

---

## 📊 Document Generation Flow

```
User Input
    ↓
[Validation] → Check required fields
    ↓
[Parsing] → Parse structure into chapters
    ↓
[AI Generation] → Claude generates each section
    ↓
[Formatting] → Apply margins, fonts, spacing
    ↓
[DOCX Building] → Create Word document
    ↓
[Download] → User receives .docx file
```

---

## 💰 Costs

| Service | Cost | Notes |
|---------|------|-------|
| **Vercel Hosting** | FREE | Up to 100GB/month |
| **Claude API** | ~$0.003/doc | ~$30 for 10,000 documents |
| **Custom Domain** | ~$12/year | Optional (vercel.app domain free) |
| **Total Monthly** | $0-3 | For personal use |

### Example Costs
- 100 documents/month = $0.30
- 1,000 documents/month = $3.00

---

## 🔧 Environment Variables

### Vercel Environment Variables (Required)

```bash
ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxx
```

How to get:
1. Visit [console.anthropic.com](https://console.anthropic.com)
2. Sign up or log in
3. Go to "API Keys"
4. Create new key
5. Copy and paste into Vercel settings

---

## 🐛 Troubleshooting

### "API Key Error" / Error 401
- Check API key is correct in Vercel settings
- Ensure you've redployed after adding the key
- API key format: `sk-ant-` followed by characters

### "Rate Limited" / Error 429
- Wait a few seconds between requests
- Check your Claude API quota at console.anthropic.com
- Consider upgrading Claude plan

### "Generation Timeout"
- Document structure too large
- API is slow (try again)
- Check internet connection

### Document looks broken
- Ensure you're using Word 2016 or newer
- Try opening in LibreOffice if needed
- Recreate if seriously corrupted

### "Please ensure you have 'ANTHROPIC_API_KEY' in environment variables"
- Verify key is added in Vercel settings
- Check spelling: `ANTHROPIC_API_KEY` (exact)
- Redeploy after adding variable

---

## 📚 API Reference

### POST /api/generate

**Request:**
```javascript
{
  "topic": "Phân tích marketing online",
  "structure": "Mở đầu\nChương 1: ...",
  "readme": "base64 encoded content (optional)",
  "logo": "data:image/png;base64,...(optional)",
  "format": {
    "fontName": "Times New Roman",
    "fontSize": 13,
    "marginLeft": 3.5,
    "marginRight": 2,
    "marginTop": 3,
    "marginBottom": 3,
    "lineSpacing": 1.5,
    "spacingAfter": 6
  }
}
```

**Response:**
```javascript
{
  "success": true,
  "document": "base64 encoded .docx file",
  "filename": "tai-lieu.docx"
}
```

---

## 🤝 Contributing

### Report Issues
Found a bug? Create an issue on GitHub with:
- Screenshot or error message
- Steps to reproduce
- Browser/device info

### Suggest Features
- New document types
- Template improvements
- UI/UX enhancements

### Pull Requests Welcome!
1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

---

## 📝 License

MIT License 2024 - See LICENSE file for details

---

## 🙏 Credits

- **AI Model**: Claude 3 (Anthropic)
- **Hosting**: Vercel
- **Document Generation**: docx.js
- **Typography**: Google Fonts + IBM Plex

---

## 📞 Support

- 📧 Email: support@luana.dev
- 🐛 Issues: GitHub Issues
- 💬 Discussions: GitHub Discussions
- 🌐 Website: https://luana.dev

---

## 🚀 Roadmap

- [ ] PDF export support
- [ ] Custom template builder UI
- [ ] Collaboration features (share documents)
- [ ] History & save documents
- [ ] Multiple language support
- [ ] Image/table insertion
- [ ] Bibliography auto-generation
- [ ] Google Docs integration
- [ ] Mobile app

---

**Made with ❤️ for students and researchers**