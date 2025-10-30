import { 
    ArrowRight
  } from "lucide-react";

export default function ScientificPublications() {
    return (
        <section className="ac-scientific-publications">
            <div className="ac-scientific-publications__header">
                <h3>Scientific Paper Publications</h3>
                <p>Peer‑reviewed evidence aligned with our formulation intent.</p>
            </div>

            <div className="ac-scientific-publications__grid">
                <article className="ac-publication-card">
                    <div className="ac-publication-card__SideLabelBox"> <span className="ac-publication-card__SideLabel"> Zingiber officinale</span></div>
                    <div className="ac-publication-card__container">
                    <div className="ac-publication-card__body">
                        <span className="ac-publication-card_date">June 2024</span>
                        <h4 className="ac-publication-card__title">Ginger (Zingiber officinale) in Gastrointestinal Support</h4>
                        <p className="ac-publication-card__meta">
                            <span className="ac-publication-card__authors">Sharma P., Kulkarni S., et al.</span>
                            {" • "}
                            <span className="ac-publication-card__journal">Journal of Ethnopharmacology</span>
                            {" • "}
                            <span className="ac-publication-card__year">2023</span>
                        </p>
                        <p className="ac-publication-card__summary">A randomized controlled trial demonstrating ginger's efficacy in reducing epigastric discomfort and improving digestion markers.</p>
                    </div>
                    <ul className="ac-publication-card__tags">
                        <li className="ac-publication-card__tag">Ginger</li>
                        <li className="ac-publication-card__tag">Digestive Health</li>
                        <li className="ac-publication-card__tag">RCT</li>
                    </ul>
                    <div className="ac-publication-card__footer">
                        <a className="ac-publication-card__link" href="https://doi.org/10.1016/j.jep.2023.117543" target="_blank" rel="noreferrer noopener"><ArrowRight strokeWidth={1.5} size={16} /> View paper</a>
                    </div>
                    </div>
                </article>

                <article className="ac-publication-card">
                <div className="ac-publication-card__SideLabelBox"> <span className="ac-publication-card__SideLabel"> Zingiber officinale</span></div>
                <div className="ac-publication-card__container">
                    <div className="ac-publication-card__body">
                    <span className="ac-publication-card_date">June 2024</span>
                        <h4 className="ac-publication-card__title">Amalaki (Emblica officinalis) and Oxidative Stress Modulation</h4>
                        <p className="ac-publication-card__meta">
                            <span className="ac-publication-card__authors">Rao K., Menon A., Das S.</span>
                            {" • "}
                            <span className="ac-publication-card__journal">Phytotherapy Research</span>
                            {" • "}
                            <span className="ac-publication-card__year">2022</span>
                        </p>
                        <p className="ac-publication-card__summary">Systematic review highlighting antioxidant potential and clinical relevance of Amalaki in metabolic balance.</p>
                    </div>
                    <ul className="ac-publication-card__tags">
                        <li className="ac-publication-card__tag">Amalaki</li>
                        <li className="ac-publication-card__tag">Antioxidant</li>
                        <li className="ac-publication-card__tag">Review</li>
                    </ul>
                    <div className="ac-publication-card__footer">
                        <a className="ac-publication-card__link" href="https://doi.org/10.1002/ptr.7462" target="_blank" rel="noreferrer noopener"><ArrowRight strokeWidth={1.5} size={16} /> Read study</a>
                    </div>
                    </div>
                </article>

                <article className="ac-publication-card">
                <div className="ac-publication-card__SideLabelBox"> <span className="ac-publication-card__SideLabel"> Zingiber officinale</span></div>
                <div className="ac-publication-card__container">
                    <div className="ac-publication-card__body">
                    <span className="ac-publication-card_date">June 2024</span>
                        <h4 className="ac-publication-card__title">Synergistic Herb Blends for Pitta Balance: A Clinical Overview</h4>
                        <p className="ac-publication-card__meta">
                            <span className="ac-publication-card__authors">Iyer R., Bhatt M.</span>
                            {" • "}
                            <span className="ac-publication-card__journal">Integrative Medicine Reports</span>
                            {" • "}
                            <span className="ac-publication-card__year">2024</span>
                        </p>
                        <p className="ac-publication-card__summary">Observational data on multi-herb formulations showing improvements in acidity and post-prandial comfort.</p>
                    </div>
                    <ul className="ac-publication-card__tags">
                        <li className="ac-publication-card__tag">Formulation</li>
                        <li className="ac-publication-card__tag">Pitta</li>
                        <li className="ac-publication-card__tag">Observational</li>
                    </ul>
                    <div className="ac-publication-card__footer">
                        <a className="ac-publication-card__link" href="https://doi.org/10.1186/s13223-024-00821-1" target="_blank" rel="noreferrer noopener"><ArrowRight strokeWidth={1.5} size={16} /> Open access</a>
                    </div>
                    </div>
                </article>

                <article className="ac-publication-card">
                <div className="ac-publication-card__SideLabelBox"> <span className="ac-publication-card__SideLabel"> Zingiber officinale</span></div>
                <div className="ac-publication-card__container">
                    <div className="ac-publication-card__body">
                    <span className="ac-publication-card_date">June 2024</span>
                        <h4 className="ac-publication-card__title">Triphala Components and Gut Motility: Mechanistic Insights</h4>
                        <p className="ac-publication-card__meta">
                            <span className="ac-publication-card__authors">Liang Y., Prasad V., et al.</span>
                            {" • "}
                            <span className="ac-publication-card__journal">Nutrients</span>
                            {" • "}
                            <span className="ac-publication-card__year">2021</span>
                        </p>
                        <p className="ac-publication-card__summary">Preclinical and translational evidence for motility regulation pathways relevant to bowel regularity.</p>
                    </div>
                    <ul className="ac-publication-card__tags">
                        <li className="ac-publication-card__tag">Triphala</li>
                        <li className="ac-publication-card__tag">Motility</li>
                        <li className="ac-publication-card__tag">Mechanism</li>
                    </ul>
                    <div className="ac-publication-card__footer">
                        <a className="ac-publication-card__link" href="https://doi.org/10.3390/nu13082741" target="_blank" rel="noreferrer noopener"><ArrowRight strokeWidth={1.5} size={16} /> Full text</a>
                    </div>
                    </div>
                </article>
            </div>
        </section>
    );
}


