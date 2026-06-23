import Image from "next/image";

const services = [
    {
        title: "Active Directory Forest Migration",
        description:
            "Plan and execute complex forest, domain, user, group, workstation, and server migrations with controlled risk and clear governance."
    },
    {
        title: "Windows Server Migration",
        description:
            "Modernize legacy Windows Server environments while protecting application availability, permissions, data access, and business continuity."
    },
    {
        title: "Domain Consolidation",
        description:
            "Reduce operational complexity by consolidating inherited, duplicated, or poorly governed domains into a cleaner target architecture."
    },
    {
        title: "Hybrid Identity Readiness",
        description:
            "Prepare Active Directory for Microsoft Entra ID, synchronization, modern authentication, UPN alignment, and long-term identity governance."
    }
];

const process = [
    {
        step: "01",
        title: "Assess",
        description:
            "Map forests, domains, trusts, servers, applications, policies, identities, permissions, and operational dependencies."
    },
    {
        step: "02",
        title: "Design",
        description:
            "Define the target architecture, migration waves, tooling strategy, rollback model, and change-control approach."
    },
    {
        step: "03",
        title: "Pilot",
        description:
            "Validate the migration approach with representative users, servers, applications, authentication flows, and support processes."
    },
    {
        step: "04",
        title: "Migrate",
        description:
            "Execute phased migrations using documented runbooks, checkpoints, issue management, validation, and stakeholder reporting."
    }
];

const capabilities = [
    "Large AD forest migration",
    "Multi-domain consolidation",
    "Legacy domain retirement",
    "Windows Server modernization",
    "File server migration",
    "DFS and permissions review",
    "GPO and OU rationalization",
    "Trust relationship review",
    "Service account discovery",
    "Application dependency mapping",
    "SID history planning",
    "UPN and identity cleanup",
    "DNS, DHCP, and core services review",
    "Microsoft Entra ID readiness",
    "Migration runbooks",
    "Post-migration stabilization"
];

const outcomes = [
    "Reduced migration risk",
    "Cleaner target directory",
    "Lower operational complexity",
    "Improved security posture",
    "Better migration visibility",
    "Controlled business disruption"
];

const indicators = [
    "Multiple forests or domains exist after mergers, acquisitions, restructures, or years of organic growth.",
    "Legacy Windows Servers are increasing security, support, compliance, or operational risk.",
    "Trusts, permissions, service accounts, GPOs, and application dependencies are poorly documented.",
    "Identity modernization is blocked by inconsistent domains, stale objects, or unclear ownership.",
    "The business needs a predictable roadmap before committing to execution."
];

const faqs = [
    {
        question: "Do you support large enterprise environments?",
        answer:
            "Yes. The service is designed for complex forests, multiple domains, distributed sites, legacy dependencies, and phased migration programs."
    },
    {
        question: "Can migrations be completed in phases?",
        answer:
            "Yes. Most enterprise migrations should be executed in controlled waves based on business unit, location, application dependency, or risk profile."
    },
    {
        question: "Do you only migrate Active Directory?",
        answer:
            "No. Active Directory migrations often involve Windows Server, file services, DNS, DHCP, PKI, applications, permissions, and hybrid identity dependencies."
    },
    {
        question: "Can you help before tooling is selected?",
        answer:
            "Yes. We can assess the environment, define the strategy, compare tooling options, and create a practical migration roadmap before execution begins."
    }
];

export default function Home() {
    return (
        <>
            <header className="siteHeader">
                <div className="container headerInner">
                    <a href="#top" className="brand" aria-label="Directory Migration Services">
                        <span className="brandMark">DM</span>
                        <span>Directory Migration</span>
                    </a>

                    <nav className="nav" aria-label="Main navigation">
                        <a href="#services">Services</a>
                        <a href="#process">Process</a>
                        <a href="#capabilities">Capabilities</a>
                        <a href="#contact">Contact</a>
                    </nav>

                    <a className="headerAction" href="mailto:amitsoft7@gmail.com">
                        Book a consult
                    </a>
                </div>
            </header>

            <main id="top">
                <section className="hero">
                    <div className="container heroGrid">
                        <div className="heroContent">
                            <p className="eyebrow">Enterprise Microsoft Migration Services</p>

                            <h1>Large Active Directory Forest & Windows Server Migration</h1>

                            <p className="heroText">
                                A structured migration service for complex Microsoft environments. We help
                                enterprises consolidate forests, modernize Windows Servers, reduce identity
                                risk, and move with confidence.
                            </p>

                            <div className="actions">
                                <a className="button primary" href="mailto:amitsoft7@gmail.com">
                                    Start your migration plan
                                </a>
                                <a className="button secondary" href="#process">
                                    View the process
                                </a>
                            </div>
                        </div>

                        <aside className="summaryCard" aria-label="Migration summary">
                            <div className="summaryHeader">
                                <span>Migration focus</span>
                                <strong>Low-disruption delivery</strong>
                            </div>

                            <div className="summaryBlock">
                                <span>Current state</span>
                                <p>Complex forests, legacy servers, unclear dependencies.</p>
                            </div>

                            <div className="summaryDivider" />

                            <div className="summaryBlock">
                                <span>Target state</span>
                                <p>Clean identity, modern servers, documented operations.</p>
                            </div>

                            <div className="summaryList">
                                <span>Discovery</span>
                                <span>Architecture</span>
                                <span>Pilot</span>
                                <span>Migration</span>
                            </div>
                        </aside>
                    </div>
                </section>

                <section className="proofStrip">
                    <div className="container proofGrid">
                        <div>
                            <span>Built for</span>
                            <strong>Mergers & acquisitions</strong>
                        </div>
                        <div>
                            <span>Designed around</span>
                            <strong>Risk-managed execution</strong>
                        </div>
                        <div>
                            <span>Focused on</span>
                            <strong>Identity and server stability</strong>
                        </div>
                    </div>
                </section>

                <section id="services" className="section">
                    <div className="container sectionGrid">
                        <div className="sectionIntro">
                            <p className="sectionLabel">Services</p>
                            <h2>Clear migration services for complex environments.</h2>
                            <p>
                                The work is planned around the full dependency chain, not just object
                                movement. Identity, servers, applications, access, policies, and support
                                processes are treated as one connected program.
                            </p>
                        </div>

                        <div className="cardGrid twoColumns">
                            {services.map((service) => (
                                <article className="card" key={service.title}>
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="process" className="section mutedSection">
                    <div className="container">
                        <div className="centerIntro">
                            <p className="sectionLabel">Process</p>
                            <h2>A calm, phased approach to high-risk infrastructure change.</h2>
                            <p>
                                Every migration is built around discovery, design, validation, execution, and
                                stabilization.
                            </p>
                        </div>

                        <div className="processGrid">
                            {process.map((item) => (
                                <article className="processCard" key={item.step}>
                                    <span>{item.step}</span>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="container outcomePanel">
                        <div className="outcomeIntro">
                            <p className="sectionLabel light">Outcomes</p>
                            <h2>Designed to leave the environment better than it was found.</h2>
                            <p>
                                A successful migration should simplify operations, improve security, reduce
                                technical debt, and give teams a more manageable platform.
                            </p>
                        </div>

                        <div className="outcomeGrid">
                            {outcomes.map((outcome) => (
                                <div className="outcomeItem" key={outcome}>
                                    <span>✓</span>
                                    <p>{outcome}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="capabilities" className="section">
                    <div className="container sectionGrid">
                        <div className="sectionIntro">
                            <p className="sectionLabel">Capabilities</p>
                            <h2>Technical depth across identity, servers, and dependencies.</h2>
                            <p>
                                Large migrations succeed when the hidden dependencies are understood early.
                                This includes authentication paths, permissions, name resolution, policies,
                                workloads, support processes, and rollback requirements.
                            </p>
                        </div>

                        <div className="capabilityGrid">
                            {capabilities.map((capability) => (
                                <div className="capabilityItem" key={capability}>
                                    {capability}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="section mutedSection">
                    <div className="container sectionGrid">
                        <div className="sectionIntro">
                            <p className="sectionLabel">When to engage</p>
                            <h2>Signals that your environment needs a structured migration plan.</h2>
                        </div>

                        <div className="indicatorList">
                            {indicators.map((indicator) => (
                                <article className="indicatorItem" key={indicator}>
                                    <span />
                                    <p>{indicator}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <div className="centerIntro">
                            <p className="sectionLabel">FAQ</p>
                            <h2>Common questions.</h2>
                        </div>

                        <div className="faqList">
                            {faqs.map((faq) => (
                                <details key={faq.question}>
                                    <summary>{faq.question}</summary>
                                    <p>{faq.answer}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="contact" className="section finalSection">
                    <div className="container finalCard">
                        <div className="finalCardGrid">
                            <figure className="contactPortrait">
                                <Image
                                    src="/potrait.jpg"
                                    alt="Directory Migration consultant portrait"
                                    fill
                                    sizes="(max-width: 760px) 240px, 280px"
                                    className="contactPortraitImage"
                                />
                            </figure>

                            <div className="finalCardContent">
                                <p className="sectionLabel light">Start with clarity</p>
                                <h2>Build a practical migration roadmap before risk becomes urgent.</h2>
                                <p>
                                    Share your current forest, server estate, business drivers, target state,
                                    and timeline. We will help define a controlled path forward.
                                </p>

                                <div className="actions">
                                    <a className="button lightButton" href="mailto:amitsoft7@gmail.com">
                                        amitsoft7@gmail.com
                                    </a>
                                    <a className="button outlineLight" href="tel:+10000000000">
                                        +61 428 783 404
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <div className="container footerInner">
                    <a href="#top" className="brand" aria-label="Directory Migration Services">
                        <span className="brandMark">DM</span>
                        <span>Directory Migration</span>
                    </a>

                    <p>Active Directory Forest Migration · Windows Server Migration · Hybrid Identity</p>
                </div>
            </footer>
        </>
    );
}