import { useState, useEffect, useRef } from "react";

// ─────────────────────────────────────────────
// DOLORES RESEARCH — Company Website V1
// ─────────────────────────────────────────────

const C = {
  bg: "#08090c",
  surface: "#0e1017",
  card: "#12141c",
  border: "#1a1d2a",
  borderHover: "#2a2e40",
  text: "#e8e6e3",
  textSoft: "#a09d98",
  textMuted: "#605d58",
  accent: "#d64d32",     // warm red-orange — the Dolores signature
  accentSoft: "#d64d3218",
  cream: "#f0ece4",
  creamDim: "#c8c4bc",
};

const fonts = {
  display: "'Instrument Serif', 'Georgia', serif",
  body: "'Libre Franklin', 'Helvetica Neue', sans-serif",
  mono: "'DM Mono', 'Menlo', monospace",
};

// ─── Smooth scroll helper ───
function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ─── Fade-in on scroll ───
function useFadeIn() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function FadeSection({ children, style, delay = 0 }) {
  const [ref, visible] = useFadeIn();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      ...style,
    }}>
      {children}
    </div>
  );
}

// ─── Navigation ───
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const linkStyle = {
    color: C.textSoft, fontSize: 13, fontFamily: fonts.body, fontWeight: 500,
    textDecoration: "none", cursor: "pointer", letterSpacing: "0.01em",
    transition: "color 0.2s",
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "0 40px", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between",
      background: scrolled ? `${C.bg}ee` : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? `1px solid ${C.border}` : "1px solid transparent",
      transition: "all 0.3s ease",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <span style={{ fontSize: 17, fontFamily: fonts.display, color: C.text, fontWeight: 400, letterSpacing: "-0.01em" }}>
          Dolores Research
        </span>
      </div>
      <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
        <span style={linkStyle} onClick={() => scrollTo("thesis")} onMouseOver={e => e.target.style.color = C.text} onMouseOut={e => e.target.style.color = C.textSoft}>Thesis</span>
        <span style={linkStyle} onClick={() => scrollTo("work")} onMouseOver={e => e.target.style.color = C.text} onMouseOut={e => e.target.style.color = C.textSoft}>Work</span>
        <span style={linkStyle} onClick={() => scrollTo("writing")} onMouseOver={e => e.target.style.color = C.text} onMouseOut={e => e.target.style.color = C.textSoft}>Writing</span>
        <a href="mailto:Leonwenhao@gmail.com" style={{
          ...linkStyle, color: C.accent, border: `1px solid ${C.accent}40`,
          padding: "6px 16px", borderRadius: 4, fontSize: 12, letterSpacing: "0.04em",
          textTransform: "uppercase", fontWeight: 600,
        }}
          onMouseOver={e => { e.target.style.background = C.accent; e.target.style.color = C.bg; }}
          onMouseOut={e => { e.target.style.background = "transparent"; e.target.style.color = C.accent; }}
        >Contact</a>
      </div>
    </nav>
  );
}

// ─── Hero ───
function Hero() {
  return (
    <section style={{
      minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center",
      padding: "120px 40px 80px", maxWidth: 980, margin: "0 auto",
      position: "relative",
    }}>
      {/* Subtle grain overlay via CSS */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.03, pointerEvents: "none",
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }} />

      <FadeSection>
        <div style={{ marginBottom: 32 }}>
          <span style={{
            fontFamily: fonts.mono, fontSize: 11, color: C.accent, letterSpacing: "0.12em",
            textTransform: "uppercase", fontWeight: 500,
          }}>
            Post-Training for Enterprise AI
          </span>
        </div>
      </FadeSection>

      <FadeSection delay={0.1}>
        <h1 style={{
          fontFamily: fonts.display, fontSize: "clamp(42px, 6vw, 72px)", fontWeight: 400,
          color: C.cream, lineHeight: 1.08, letterSpacing: "-0.025em",
          margin: "0 0 28px", maxWidth: 820,
        }}>
          We make cheap models <br />behave like expensive ones.
        </h1>
      </FadeSection>

      <FadeSection delay={0.2}>
        <p style={{
          fontFamily: fonts.body, fontSize: 18, color: C.textSoft, lineHeight: 1.7,
          margin: "0 0 48px", maxWidth: 600, fontWeight: 400,
        }}>
          Dolores Research is a post-training company. We take open-source models from Qwen, DeepSeek, and Mistral and fine-tune them for enterprise multi-agent orchestration, closing the behavioral gap with frontier models at a fraction of the cost.
        </p>
      </FadeSection>

      <FadeSection delay={0.3}>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a href="https://github.com/Leonwenhao/deeprepo" target="_blank" rel="noopener noreferrer" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "12px 24px", background: C.accent, color: C.bg,
            fontFamily: fonts.body, fontSize: 14, fontWeight: 600, borderRadius: 4,
            textDecoration: "none", letterSpacing: "0.01em",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
            onMouseOver={e => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = `0 6px 24px ${C.accent}30`; }}
            onMouseOut={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
          >
            View DeepRepo on GitHub →
          </a>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "12px 24px", border: `1px solid ${C.border}`, color: C.textSoft,
            fontFamily: fonts.body, fontSize: 14, fontWeight: 500, borderRadius: 4,
            cursor: "pointer", transition: "border-color 0.2s",
          }}
            onClick={() => scrollTo("thesis")}
            onMouseOver={e => e.currentTarget.style.borderColor = C.textMuted}
            onMouseOut={e => e.currentTarget.style.borderColor = C.border}
          >
            Read our thesis
          </span>
        </div>
      </FadeSection>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
      }}>
        <div style={{
          width: 1, height: 40, background: `linear-gradient(to bottom, ${C.textMuted}, transparent)`,
          animation: "pulse 2s ease-in-out infinite",
        }} />
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </section>
  );
}

// ─── Thesis Section ───
function Thesis() {
  return (
    <section id="thesis" style={{ padding: "100px 40px", maxWidth: 980, margin: "0 auto" }}>
      <FadeSection>
        <span style={{
          fontFamily: fonts.mono, fontSize: 10, color: C.textMuted,
          letterSpacing: "0.14em", textTransform: "uppercase",
        }}>
          01 — Thesis
        </span>
        <h2 style={{
          fontFamily: fonts.display, fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 400,
          color: C.cream, lineHeight: 1.15, margin: "16px 0 0", letterSpacing: "-0.02em",
        }}>
          The behavioral gap between frontier and mid-tier models is measurable, reproducible, and trainable.
        </h2>
      </FadeSection>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, marginTop: 56, background: C.border, borderRadius: 2 }}>
        {[
          {
            title: "The Problem",
            body: "Claude Opus dispatches 61 sub-agent calls on a codebase analysis. Claude Sonnet dispatches 9 on the same task. This isn't a capability gap. It's a strategy gap: when to delegate, when to retry, how to synthesize. And strategy can be taught.",
          },
          {
            title: "The Approach",
            body: "We capture orchestration traces from frontier models and distill them into open-source models via supervised fine-tuning and autonomous self-improvement loops. The result: models that cost 30x less but orchestrate with comparable depth.",
          },
          {
            title: "The Flywheel",
            body: "Agency work generates training environments. Training environments become proprietary assets. Assets improve deployed systems and attract more clients. Every engagement makes the next one better.",
          },
          {
            title: "The Market",
            body: "Enterprises want agentic AI but can't justify frontier model costs at scale. We deliver the orchestration quality of a $15/1K-token model at $0.50/1K-token, self-hosted. Chinese AI with American Characteristics.",
          },
        ].map((item, i) => (
          <FadeSection key={i} delay={i * 0.08} style={{
            background: C.surface, padding: "36px 32px",
          }}>
            <h3 style={{
              fontFamily: fonts.display, fontSize: 22, color: C.cream, fontWeight: 400,
              margin: "0 0 14px", letterSpacing: "-0.01em",
            }}>{item.title}</h3>
            <p style={{
              fontFamily: fonts.body, fontSize: 15, color: C.textSoft, lineHeight: 1.72,
              margin: 0, fontWeight: 400,
            }}>{item.body}</p>
          </FadeSection>
        ))}
      </div>
    </section>
  );
}

// ─── Proof Points ───
function Proof() {
  const stats = [
    { value: "100%", label: "File coverage", sub: "vs 89% baseline", context: "FastAPI codebase analysis" },
    { value: "53%", label: "Cost reduction", sub: "$0.46 vs $0.99", context: "DeepRepo on FastAPI" },
    { value: "+77%", label: "Retry intelligence", sub: "in one training cycle", context: "Mistral SFT loop" },
    { value: "+22%", label: "Synthesis quality", sub: "across 7 iterations", context: "Autonomous overnight run" },
  ];

  return (
    <section style={{
      padding: "80px 40px", borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`,
    }}>
      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        <FadeSection>
          <span style={{
            fontFamily: fonts.mono, fontSize: 10, color: C.textMuted,
            letterSpacing: "0.14em", textTransform: "uppercase",
          }}>
            02 — Proof Points
          </span>
        </FadeSection>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, marginTop: 32, background: C.border }}>
          {stats.map((s, i) => (
            <FadeSection key={i} delay={i * 0.07} style={{ background: C.bg, padding: "36px 28px" }}>
              <div style={{
                fontFamily: fonts.display, fontSize: 44, color: C.accent, fontWeight: 400,
                letterSpacing: "-0.03em", lineHeight: 1,
              }}>{s.value}</div>
              <div style={{
                fontFamily: fonts.body, fontSize: 14, color: C.cream, fontWeight: 600,
                margin: "10px 0 4px", letterSpacing: "0.01em",
              }}>{s.label}</div>
              <div style={{
                fontFamily: fonts.mono, fontSize: 12, color: C.textSoft, marginBottom: 8,
              }}>{s.sub}</div>
              <div style={{
                fontFamily: fonts.mono, fontSize: 10, color: C.textMuted,
                borderTop: `1px solid ${C.border}`, paddingTop: 10, marginTop: 6,
              }}>{s.context}</div>
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Work Section (DeepRepo + RLM Distiller) ───
function Work() {
  return (
    <section id="work" style={{ padding: "100px 40px", maxWidth: 980, margin: "0 auto" }}>
      <FadeSection>
        <span style={{
          fontFamily: fonts.mono, fontSize: 10, color: C.textMuted,
          letterSpacing: "0.14em", textTransform: "uppercase",
        }}>
          03 — Work
        </span>
        <h2 style={{
          fontFamily: fonts.display, fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 400,
          color: C.cream, lineHeight: 1.2, margin: "16px 0 48px", letterSpacing: "-0.015em",
        }}>
          Open tools, real benchmarks.
        </h2>
      </FadeSection>

      <div style={{ display: "flex", flexDirection: "column", gap: 1, background: C.border }}>
        {/* DeepRepo */}
        <FadeSection>
          <a href="https://github.com/Leonwenhao/deeprepo" target="_blank" rel="noopener noreferrer" style={{
            display: "grid", gridTemplateColumns: "1fr auto", alignItems: "start",
            padding: "40px 36px", background: C.surface, textDecoration: "none",
            cursor: "pointer", transition: "background 0.2s",
          }}
            onMouseOver={e => e.currentTarget.style.background = C.card}
            onMouseOut={e => e.currentTarget.style.background = C.surface}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <h3 style={{ fontFamily: fonts.display, fontSize: 26, color: C.cream, fontWeight: 400, margin: 0 }}>DeepRepo</h3>
                <span style={{
                  fontFamily: fonts.mono, fontSize: 9, color: C.accent, letterSpacing: "0.08em",
                  textTransform: "uppercase", border: `1px solid ${C.accent}30`, padding: "2px 8px", borderRadius: 2,
                }}>Open Source</span>
              </div>
              <p style={{
                fontFamily: fonts.body, fontSize: 15, color: C.textSoft, lineHeight: 1.7, margin: 0, maxWidth: 560,
              }}>
                Multi-agent codebase analysis engine. A frontier model orchestrates a swarm of cheap sub-LLMs for deep code review, security audits, and architectural analysis. Achieves 100% file coverage at half the cost of single-model baselines.
              </p>
              <div style={{ display: "flex", gap: 20, marginTop: 16 }}>
                {[
                  { k: "Stack", v: "Python, AsyncIO" },
                  { k: "Models", v: "Claude, Qwen, Mistral" },
                  { k: "Install", v: "pip install deeprepo-cli" },
                ].map((t, j) => (
                  <span key={j} style={{ fontFamily: fonts.mono, fontSize: 11, color: C.textMuted }}>
                    <span style={{ color: C.textSoft }}>{t.k}:</span> {t.v}
                  </span>
                ))}
              </div>
            </div>
            <span style={{ fontFamily: fonts.display, fontSize: 24, color: C.textMuted, transition: "color 0.2s" }}>→</span>
          </a>
        </FadeSection>

        {/* RLM Distiller */}
        <FadeSection delay={0.08}>
          <div style={{
            display: "grid", gridTemplateColumns: "1fr auto", alignItems: "start",
            padding: "40px 36px", background: C.surface, cursor: "default",
          }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <h3 style={{ fontFamily: fonts.display, fontSize: 26, color: C.cream, fontWeight: 400, margin: 0 }}>RLM Distiller</h3>
                <span style={{
                  fontFamily: fonts.mono, fontSize: 9, color: C.textMuted, letterSpacing: "0.08em",
                  textTransform: "uppercase", border: `1px solid ${C.border}`, padding: "2px 8px", borderRadius: 2,
                }}>W&B Hackathon Winner</span>
              </div>
              <p style={{
                fontFamily: fonts.body, fontSize: 15, color: C.textSoft, lineHeight: 1.7, margin: 0, maxWidth: 560,
              }}>
                Autonomous self-improvement loop that distills orchestration intelligence from Claude into Mistral Small 24B. 7 iterations, 875 W&B Weave traces, zero human intervention, $44 total cost. Retry intelligence improved 77% in a single training cycle.
              </p>
              <div style={{ display: "flex", gap: 20, marginTop: 16 }}>
                {[
                  { k: "Method", v: "QLoRA + Self-Improvement Loop" },
                  { k: "Runtime", v: "7h 27m autonomous" },
                  { k: "Traces", v: "875 in W&B Weave" },
                ].map((t, j) => (
                  <span key={j} style={{ fontFamily: fonts.mono, fontSize: 11, color: C.textMuted }}>
                    <span style={{ color: C.textSoft }}>{t.k}:</span> {t.v}
                  </span>
                ))}
              </div>
            </div>
            <span style={{ fontFamily: fonts.display, fontSize: 24, color: C.textMuted }}>◉</span>
          </div>
        </FadeSection>

        {/* Security Audit Benchmark */}
        <FadeSection delay={0.16}>
          <div style={{
            display: "grid", gridTemplateColumns: "1fr auto", alignItems: "start",
            padding: "40px 36px", background: C.surface,
          }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <h3 style={{ fontFamily: fonts.display, fontSize: 26, color: C.cream, fontWeight: 400, margin: 0 }}>Three-Way Security Audit</h3>
                <span style={{
                  fontFamily: fonts.mono, fontSize: 9, color: C.textMuted, letterSpacing: "0.08em",
                  textTransform: "uppercase", border: `1px solid ${C.border}`, padding: "2px 8px", borderRadius: 2,
                }}>In Progress</span>
              </div>
              <p style={{
                fontFamily: fonts.body, fontSize: 15, color: C.textSoft, lineHeight: 1.7, margin: 0, maxWidth: 560,
              }}>
                Head-to-head comparison of frontier Claude, base Qwen3-30B, and fine-tuned Qwen adapter on real codebase security audits. Structured JSON findings, adjudicated labels, and honest benchmarking of breadth-vs-depth tradeoffs.
              </p>
            </div>
            <span style={{ fontFamily: fonts.display, fontSize: 24, color: C.textMuted }}>◈</span>
          </div>
        </FadeSection>
      </div>
    </section>
  );
}

// ─── Writing Section ───
function Writing() {
  return (
    <section id="writing" style={{ padding: "100px 40px", maxWidth: 980, margin: "0 auto" }}>
      <FadeSection>
        <span style={{
          fontFamily: fonts.mono, fontSize: 10, color: C.textMuted,
          letterSpacing: "0.14em", textTransform: "uppercase",
        }}>
          04 — Writing
        </span>
        <h2 style={{
          fontFamily: fonts.display, fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 400,
          color: C.cream, lineHeight: 1.2, margin: "16px 0 48px", letterSpacing: "-0.015em",
        }}>
          Thinking in public.
        </h2>
      </FadeSection>

      <FadeSection delay={0.08}>
        <a
          href="https://leonliu.substack.com/p/post-training-is-just-dog-training"
          target="_blank" rel="noopener noreferrer"
          style={{
            display: "block", padding: "36px 36px", background: C.surface,
            border: `1px solid ${C.border}`, borderRadius: 2, textDecoration: "none",
            transition: "border-color 0.2s, background 0.2s",
          }}
          onMouseOver={e => { e.currentTarget.style.borderColor = C.accent + "40"; e.currentTarget.style.background = C.card; }}
          onMouseOut={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = C.surface; }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
            <div>
              <span style={{ fontFamily: fonts.mono, fontSize: 10, color: C.accent, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Substack
              </span>
              <h3 style={{
                fontFamily: fonts.display, fontSize: 24, color: C.cream, fontWeight: 400,
                margin: "8px 0 12px", letterSpacing: "-0.01em",
              }}>
                Post-Training Is Just Dog Training
              </h3>
              <p style={{
                fontFamily: fonts.body, fontSize: 14, color: C.textSoft, lineHeight: 1.7, margin: 0, maxWidth: 520,
              }}>
                The intuitions behind fine-tuning explained through the lens every dog owner already understands. Why showing good behavior works better than punishing bad behavior, and what that means for building AI systems.
              </p>
            </div>
            <span style={{ fontFamily: fonts.display, fontSize: 24, color: C.textMuted }}>→</span>
          </div>
        </a>
      </FadeSection>

      <FadeSection delay={0.16}>
        <a
          href="https://leonliu.substack.com/"
          target="_blank" rel="noopener noreferrer"
          style={{
            display: "block", marginTop: 1, padding: "20px 36px", background: C.surface,
            border: `1px solid ${C.border}`, borderRadius: 2, textDecoration: "none",
            transition: "border-color 0.2s",
          }}
          onMouseOver={e => e.currentTarget.style.borderColor = C.borderHover}
          onMouseOut={e => e.currentTarget.style.borderColor = C.border}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontFamily: fonts.body, fontSize: 14, color: C.textSoft }}>
              More writing on Substack →
            </span>
            <span style={{ fontFamily: fonts.mono, fontSize: 11, color: C.textMuted }}>leonliu.substack.com</span>
          </div>
        </a>
      </FadeSection>
    </section>
  );
}

// ─── Contact / Footer ───
function Footer() {
  return (
    <footer style={{
      padding: "80px 40px 48px",
      borderTop: `1px solid ${C.border}`,
    }}>
      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        <FadeSection>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, marginBottom: 80 }}>
            <div>
              <h2 style={{
                fontFamily: fonts.display, fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 400,
                color: C.cream, lineHeight: 1.2, margin: "0 0 16px", letterSpacing: "-0.015em",
              }}>
                Let's talk.
              </h2>
              <p style={{
                fontFamily: fonts.body, fontSize: 15, color: C.textSoft, lineHeight: 1.7, margin: 0,
              }}>
                Whether you're exploring enterprise AI orchestration, interested in fine-tuning open-source models, or want to discuss the future of post-training, we'd like to hear from you.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 16 }}>
              <a href="mailto:Leonwenhao@gmail.com" style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                padding: "14px 28px", background: C.accent, color: C.bg,
                fontFamily: fonts.body, fontSize: 15, fontWeight: 600, borderRadius: 4,
                textDecoration: "none", transition: "transform 0.2s, box-shadow 0.2s",
                alignSelf: "flex-start",
              }}
                onMouseOver={e => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = `0 6px 24px ${C.accent}30`; }}
                onMouseOut={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                Leonwenhao@gmail.com
              </a>
              <div style={{ display: "flex", gap: 20, marginTop: 4 }}>
                <a href="https://github.com/Leonwenhao/deeprepo" target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: fonts.mono, fontSize: 12, color: C.textMuted, textDecoration: "none", transition: "color 0.2s" }}
                  onMouseOver={e => e.target.style.color = C.textSoft}
                  onMouseOut={e => e.target.style.color = C.textMuted}
                >GitHub</a>
                <a href="https://leonliu.substack.com/" target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: fonts.mono, fontSize: 12, color: C.textMuted, textDecoration: "none", transition: "color 0.2s" }}
                  onMouseOver={e => e.target.style.color = C.textSoft}
                  onMouseOut={e => e.target.style.color = C.textMuted}
                >Substack</a>
              </div>
            </div>
          </div>
        </FadeSection>

        {/* Bottom bar */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          paddingTop: 24, borderTop: `1px solid ${C.border}`,
        }}>
          <span style={{ fontFamily: fonts.display, fontSize: 15, color: C.textMuted }}>Dolores Research</span>
          <span style={{ fontFamily: fonts.mono, fontSize: 10, color: C.textMuted }}>San Francisco, CA · 2026</span>
        </div>
      </div>
    </footer>
  );
}

// ─── Main ───
export default function DoloresResearch() {
  return (
    <div style={{ background: C.bg, color: C.text, minHeight: "100vh" }}>
      <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Libre+Franklin:wght@300;400;500;600;700&family=DM+Mono:wght@300;400;500&display=swap" rel="stylesheet" />

      <Nav />
      <Hero />
      <Thesis />
      <Proof />
      <Work />
      <Writing />
      <Footer />
    </div>
  );
}
