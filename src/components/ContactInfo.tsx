export default function ContactInfo() {
  return (
    <div className="grid grid-cols-3 gap-y-1 gap-x-4 w-full print:grid-cols-1 print:gap-y-0.5">
      <div className="flex items-center">
        <a href="mailto:sgelias@outlook.com" className="inline-flex items-center gap-1">
          <img src="/outlook-favicon.ico" alt="Email Outlook" className="w-4 h-4" />
          sgelias@outlook.com
        </a>
      </div>

      <div className="flex items-center">
        <span className="inline-block align-middle">
          🇧🇷 +55 (61) 98210-3979
        </span>
      </div>

      <div className="flex items-center">
        <a href="https://orcid.org/0000-0001-9138-8845" className="inline-flex items-center gap-1">
          <img src="/orcid-16x16.png" alt="ORCID" className="w-5 h-5" />
          0000-0001-9138-8845
        </a>
      </div>

      <div className="flex items-center">
        <a href="https://www.linkedin.com/in/sgelias/" className="align-middle inline-flex items-center gap-1">
          <img src="/linkedin-favicon.ico" alt="LinkedIn" className="w-4 h-4" />
          sgelias
        </a>
      </div>

      <div className="flex items-center">
        <a href="https://github.com/LepistaBioinformatics" className="inline-block align-middle">
          <img src="/github-lepista.png" alt="Organization GitHub" className="w-5 h-5 rounded-full inline-block align-middle mr-1" />
          Organization GitHub
        </a>
      </div>

      <div className="flex items-center">
        <a href="https://github.com/sgelias" className="inline-block align-middle">
          <img src="/github-sgelias.png" alt="Personal GitHub" className="w-5 h-5 rounded-full inline-block align-middle mr-1" />
          Personal GitHub
        </a>
      </div>

      <div className="flex items-center">
        <a href="#" className="inline-flex items-center gap-1">
          <img src="/wechat-icon.png" alt="WeChat" className="w-4 h-4" />
          <span className="font-bold">sgelias</span>
        </a>
      </div>

      <div className="flex items-center">
        <a href="https://t.me/sgelias" className="inline-flex items-center gap-1">
          <img src="/telegram-icon.ico" alt="Telegram" className="w-4 h-4" />
          <span className="font-bold">@sgelias</span>
        </a>
      </div>
    </div>
  )
}
