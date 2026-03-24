const tdIcon  = "pr-2 py-0.5 align-middle w-5"
const tdLabel = "pr-6 py-0.5 text-sm font-semibold text-zinc-500 whitespace-nowrap align-middle"
const tdValue = "py-0.5 text-sm align-middle"

export default function ContactInfo() {
  return (
    <>
      {/* Web: grid 3 colunas */}
      <div className="grid grid-cols-3 gap-y-1 gap-x-4 w-full mt-3 print:hidden">
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
          <a href="https://www.linkedin.com/in/sgelias/" className="inline-flex items-center gap-1">
            <img src="/linkedin-favicon.ico" alt="LinkedIn" className="w-4 h-4" />
            sgelias
          </a>
        </div>

        <div className="flex items-center">
          <a href="https://github.com/LepistaBioinformatics" className="inline-flex items-center gap-1">
            <img src="/github-lepista.png" alt="Organization GitHub" className="w-5 h-5 rounded-full mr-1" />
            Organization GitHub
          </a>
        </div>

        <div className="flex items-center">
          <a href="https://github.com/sgelias" className="inline-flex items-center gap-1">
            <img src="/github-sgelias.png" alt="Personal GitHub" className="w-5 h-5 rounded-full mr-1" />
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

      {/* Print: data table coluna única — ícone | label | valor */}
      <table className="hidden print:table mt-3 border-collapse">
        <tbody>
          <tr>
            <td className={tdIcon}><img src="/outlook-favicon.ico" alt="" className="w-4 h-4" /></td>
            <td className={tdLabel}>Email</td>
            <td className={tdValue}><a href="mailto:sgelias@outlook.com">sgelias@outlook.com</a></td>
          </tr>
          <tr>
            <td className={tdIcon}><span className="text-sm">🇧🇷</span></td>
            <td className={tdLabel}>Phone</td>
            <td className={tdValue}>+55 (61) 98210-3979</td>
          </tr>
          <tr>
            <td className={tdIcon}><img src="/orcid-16x16.png" alt="" className="w-4 h-4" /></td>
            <td className={tdLabel}>ORCID</td>
            <td className={tdValue}><a href="https://orcid.org/0000-0001-9138-8845">0000-0001-9138-8845</a></td>
          </tr>
          <tr>
            <td className={tdIcon}><img src="/linkedin-favicon.ico" alt="" className="w-4 h-4" /></td>
            <td className={tdLabel}>LinkedIn</td>
            <td className={tdValue}><a href="https://www.linkedin.com/in/sgelias/">linkedin.com/in/sgelias</a></td>
          </tr>
          <tr>
            <td className={tdIcon}><img src="/github-lepista.png" alt="" className="w-4 h-4 rounded-full" /></td>
            <td className={tdLabel}>GitHub (Org)</td>
            <td className={tdValue}><a href="https://github.com/LepistaBioinformatics">LepistaBioinformatics</a></td>
          </tr>
          <tr>
            <td className={tdIcon}><img src="/github-sgelias.png" alt="" className="w-4 h-4 rounded-full" /></td>
            <td className={tdLabel}>GitHub (Personal)</td>
            <td className={tdValue}><a href="https://github.com/sgelias">github.com/sgelias</a></td>
          </tr>
          <tr>
            <td className={tdIcon}><img src="/wechat-icon.png" alt="" className="w-4 h-4" /></td>
            <td className={tdLabel}>WeChat</td>
            <td className={tdValue}>sgelias</td>
          </tr>
          <tr>
            <td className={tdIcon}><img src="/telegram-icon.ico" alt="" className="w-4 h-4" /></td>
            <td className={tdLabel}>Telegram</td>
            <td className={tdValue}><a href="https://t.me/sgelias">@sgelias</a></td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
