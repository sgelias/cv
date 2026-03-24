import MarkdownBlock from './MarkdownBlock.tsx'
import introContent from '../content/publications/intro.md?raw'
import lifeSciencesIntro from '../content/publications/life-sciences-intro.md?raw'
import healthSciencesIntro from '../content/publications/health-sciences-intro.md?raw'

const lifeSciences: string[] = [
  '2024: GeneConnector: Unlocking the full potential of Genbank metadata; ELIAS, S. GALVAO ; GUTERRES, D. CERVIERI ; BARRETO, R. WEINGART ; VALE, H. MARIO MARTINS DO; IEEE Latin America Transactions, vol. 22, no. 2, pp. 99-105, Feb. 2024, doi: 10.1109/TLA.2024.10412034.',
  '2022: Neotropical Studies on Hymenochaetaceae: Unveiling the Diversity and Endemicity of Phellinotus; SALVADOR-MONTOYA, C. A. ; ELIAS, S. G. ; POPOFF, O. F. ; ROBLEDO, G. L. ; URCELAY, C. ; GÓES-NETO, A. ; MARTÍNEZ, S. ; DRECHSLER-SANTOS, E. R.; J Fungi (Basel). 2022 Feb 22;8(3):216. doi: 10.3390/jof8030216. PMID: 35330218; PMCID: PMC8950266.',
  '2022: Reinstatement and phylogenetic allocation of the palm rust genus Cerradoa in the Pucciniaceae, and establishment of Pseudocerradoa, gen. nov; EBINGHAUS, MALTE ; DOS SANTOS, MARIA D. M. ; SOUZA, ERICA S. C. ; BARNES, CHARLES W. ; NDACNOU, MIRAINE K. ; VÉLEZ-ZAMBRANO, SÉRGIO M. ; GALVÃO-ELIAS, SAMUEL ; BEGEROW, DOMINIK ; BARRETO, R. W. ; Dianese, José C.; MYCOLOGIA, v. 115, p. 1-19, 2022',
  '2021: Phytophthora theobromicola sp. nov.: A New Species Causing Black Pod Disease on Cacao in Brazil; DECLOQUEMENT, J. ; RAMOS-SOBRINHO, R. ; ELIAS, S. G. ; BRITTO, D. S. ; PUIG, A. S. ; REIS, A. ; DA SILVA, R. A. F. ; HONORATO-JÚNIOR, J. ; LUZ, E. D. M. N. ; PINHO, D. B. ; MARELLI, J.-P.; Frontiers in Microbiology, Volume 12, 2021. DOI: 10.3389/fmicb.2021.537399. ISSN: 1664-302X.',
  '2020: Studies on the biogeography of Phellinotus piptadeniae (Hymenochaetales, Basidiomycota): Expanding the knowledge on its distribution and clarifying hosts relationships; ELIAS, S. G. ; SALVADOR-MONTOYA, C. A. ; COSTA-REZENDE, D. H. ; GUTERRES, D. C. ; FERNANDES, M. ; OLKOSKI, D. ; KLABUNDE, G. H. F. ; DRECHSLER-SANTOS, E. R.; Fungal Ecology, Volume 45, 2020, 100912, ISSN 1754-5048.',
  '2020: Moniliophthora perniciosa, the mushroom causing witches\' broom disease of cacao: Insights into its taxonomy, ecology and host range in Brazil; LISBOA, D. O. ; EVANS, H. C. ; ARAÚJO, J. P. M. ; ELIAS, S. G. ; BARRETO, R. W.; Fungal Biology, Volume 124, Issue 12, 2020, Pages 983-1003, ISSN 1878-6146.',
  '2020: A new section, Lactifluus section Neotropicus (Russulaceae), and two new Lactifluus species from the Atlantic Forest, Brazil; DUQUE BARBOSA, J. A. ; DELGAT, L. ; GALVÃO ELIAS, S. ; VERBEKEN, A. ; NEVES, M. A. ; CARVALHO, A. ALVES DE; Systematics and Biodiversity, 18(4), 347–361.',
  '2019: Phaeochorellaceae, Diaporthales: a new fungal family and a re-appraisal of Phaeochorella species.; GUTERRES, D. C. ; ELIAS, S. G. ; SANTOS, M. D. M. ; SOUZA, B. C. P. ; ALMEIDA, C. P. ; PINHO, D. B. ; MILLER, R. N. G. ; DIANESE, J. C.; MYCOLOGIA, v. 111, p. 1-16, 2019',
  '2019: Phylogenetic Relationships of Phaeochorella Parinarii and Recognition of a New Family, Phaeochorellaceae (Diaporthales); GUTERRES, D. C. ; GALVÃO-ELIAS, S. ; SANTOS, M. D. M. ; SOUZA, B. C. P. ; ALMEIDA, C. P. ; PINHO, D. B. ; MILLER, R. N. G. ; DIANESE, J. C.; Mycologia 111, no. 4 (2019): 660–75.',
  '2018: Taxonomy, phylogeny, and divergence time estimation for Apiosphaeria guaranitica, a neotropical parasite on bignoniaceous hosts.; GUTERRES, D. C. ; GALVAO-ELIAS, S. ; SOUZA, B. C. P. ; PINHO, D. B. ; SANTOS, M. D. M. ; MILLER, R. N. G. ; DIANESE, J. C.; MYCOLOGIA, v. 110, p. 526-545, 2018',
  '2018: Crossopsorella, a new tropical genus of rust fungi; SOUZA, E. S. C. ; AIME, M. C. ; ELIAS, S. G. ; PINHO, D. B. ; MILLER, R. N. G. ; DIANESE, J. C.; Phytotaxa, v. 375, p. 189-202, 2018',
]

const healthSciences: string[] = [
  '2014: Inhibition of matrix metalloproteinases-2 and -9 prevents cognitive impairment induced by pneumococcal meningitis in Wistar rats; BARICHELLO, T. ; GENEROSO, J. S. ; MICHELON, C. M. ; SIMÕES, L. R. ; ELIAS, S. G. ; VUOLO, F. ; COMIM, C. M. ; DAL-PIZZOL, F. ; QUEVEDO, J.; Exp Biol Med (Maywood). 2014 Feb;239(2):225-31. doi: 10.1177/1535370213508354. Epub 2014 Jan 13. PMID: 24419461.',
  '2014: Klebsiella pneumoniae meningitis induces memory impairment and increases pro-inflammatory host response in the central nervous system of Wistar rats; BARICHELLO, T. ; SIMÕES, L. R. ; VALVASSORI, S. S. ; GENEROSO, J. S. ; AVELINE, P. E. D. V. ; DOMINGUINI, D. ; ELIAS, S. G. ; VILELA, M. C. ; QUEVEDO, J. ; TEIXEIRA, A. L.; J Med Microbiol. 2014 Jan;63(Pt 1):111-117. doi: 10.1099/jmm.0.063289-0. Epub 2013 Oct 8. PMID: 24105840.',
  '2013: Inhibition of indoleamine 2,3-dioxygenase prevented cognitive impairment in adult Wistar rats subjected to pneumococcal meningitis; BARICHELLO, T. ; GENEROSO, J. S. ; SIMÕES, L. R. ; ELIAS, S. G. ; TASHIRO, M. H. ; DOMINGUINI, D. ; COMIM, C. M. ; VILELA, M. C. ; TEIXEIRA, A. L. ; QUEVEDO, J.; Translational Research, Volume 162, Issue 6, 2013, Pages 390-397, ISSN 1931-5244.',
  '2013: Pathophysiology of bacterial infection of the central nervous system and its putative role in the pathogenesis of behavioral changes; BARICHELLO, T. ; GENEROSO, J. S. ; MILIOLI, G. ; ELIAS, S. G. ; TEIXEIRA, A. L.; Braz J Psychiatry. 2013 Mar;35(1):81-7. doi: 10.1016/j.rbp.2012.11.003. PMID: 23567606.',
  '2013: Pathophysiology of neonatal acute bacterial meningitis; BARICHELLO, T. ; FAGUNDES, G. D. ; GENEROSO, J. S. ; ELIAS, S. G. ; SIMÕES, L. R. ; TEIXEIRA, A. L.; J Med Microbiol. 2013 Dec;62(Pt 12):1781-1789. doi: 10.1099/jmm.0.059840-0. Epub 2013 Aug 14. PMID: 23946474.',
  '2013: Role of oxidative stress in the pathophysiology of pneumococcal meningitis; BARICHELLO, T. ; GENEROSO, J. S. ; SIMÕES, L. R. ; ELIAS, S. G. ; QUEVEDO, J.; Oxid Med Cell Longev. 2013;2013:371465. doi: 10.1155/2013/371465. Epub 2013 May 9. PMID: 23766853; PMCID: PMC3665263.',
]

export default function Publications() {
  return (
    <section className="my-5 print:break-before-page text-justify space-y-6">
      <h2 id="publications">Publications in Journals</h2>

      <MarkdownBlock content={introContent} className="my-6 [&_p]:my-2" />

      <h3 id="life-sciences">Life Sciences and Bioinformatics</h3>

      <MarkdownBlock content={lifeSciencesIntro} className="my-6 [&_p]:my-2" />

      <ol className="list-decimal list-inside space-y-4">
        {lifeSciences.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ol>

      <h3 id="health-sciences">Health Sciences</h3>

      <MarkdownBlock content={healthSciencesIntro} className="my-6 [&_p]:my-2" />

      <ol className="list-decimal list-inside space-y-4">
        {healthSciences.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ol>
    </section>
  )
}
