import React, { useState } from 'react';
import { Key, Lock, ArrowDown, Split, Check } from 'lucide-react';

export const RSAFlow: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'comparison' | 'pipeline'>('comparison');

  return (
    <div className="rsa-flow-wrapper" aria-label="RSA Cryptographic Architecture">
      {/* Header */}
      <div className="flow-card-header font-mono">
        <div className="flow-title">
          <Key size={14} className="text-accent" />
          <span>CRYPTOGRAPHIC ARCHITECTURE · DUAL IMPLEMENTATION</span>
        </div>
        <div className="flow-tag">
          <span>2048-BIT OAEP &amp; FIRST PRINCIPLES</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="rsa-tabs-bar font-mono">
        <button
          type="button"
          className={`rsa-tab-btn ${activeTab === 'comparison' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('comparison')}
        >
          <Split size={12} />
          <span>IMPLEMENTATION COMPARISON</span>
        </button>
        <button
          type="button"
          className={`rsa-tab-btn ${activeTab === 'pipeline' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('pipeline')}
        >
          <Key size={12} />
          <span>KEY DERIVATION FLOW</span>
        </button>
      </div>

      {/* Tab Content: Comparison Matrix */}
      {activeTab === 'comparison' && (
        <div className="rsa-comparison-grid font-mono">
          {/* Implementation A: From Scratch */}
          <div className="rsa-comparison-card card-scratch">
            <div className="comp-card-head">
              <span className="comp-badge-type">// IMPLEMENTATION A</span>
              <h4 className="comp-title">FROM SCRATCH</h4>
              <span className="comp-tag">First-Principles Theory</span>
            </div>
            <ul className="comp-features-list">
              <li>
                <Check size={11} className="text-accent" />
                <span>Manual Prime Generation &amp; Fermat/Miller-Rabin</span>
              </li>
              <li>
                <Check size={11} className="text-accent" />
                <span>Extended Euclidean Modular Inverse (d ≡ e⁻¹ mod φ(n))</span>
              </li>
              <li>
                <Check size={11} className="text-accent" />
                <span>Deep Number Theory &amp; Totient Function φ(n)</span>
              </li>
              <li>
                <Check size={11} className="text-accent" />
                <span>Educational / Foundational Cryptanalysis</span>
              </li>
            </ul>
          </div>

          {/* VS Divider */}
          <div className="comp-vs-divider">
            <span className="vs-pill">VS</span>
          </div>

          {/* Implementation B: Production Grade */}
          <div className="rsa-comparison-card card-production">
            <div className="comp-card-head">
              <span className="comp-badge-type text-accent">// IMPLEMENTATION B</span>
              <h4 className="comp-title text-accent">PRODUCTION GRADE</h4>
              <span className="comp-tag comp-tag-prod">Semantic Security</span>
            </div>
            <ul className="comp-features-list">
              <li>
                <Check size={11} className="text-accent" />
                <span>2048-Bit Key Generation (NIST/RFC Compliant)</span>
              </li>
              <li>
                <Check size={11} className="text-accent" />
                <span>RSA-OAEP Padding (Optimal Asymmetric Padding)</span>
              </li>
              <li>
                <Check size={11} className="text-accent" />
                <span>PyCryptodome Constant-Time Cryptographic Engine</span>
              </li>
              <li>
                <Check size={11} className="text-accent" />
                <span>Validated against 100+ Cryptographic Test Vectors</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Tab Content: Pipeline Flow */}
      {activeTab === 'pipeline' && (
        <div className="rsa-pipeline-container font-mono">
          <div className="rsa-pipe-step">
            <div className="pipe-node">
              <span className="pipe-node-title">01. PRIME GENERATION</span>
              <span className="pipe-node-sub">Generate large distinct primes (p, q)</span>
            </div>
            <ArrowDown size={14} className="text-accent pipe-arrow" />
          </div>

          <div className="rsa-pipe-step">
            <div className="pipe-node">
              <span className="pipe-node-title">02. MODULUS &amp; TOTIENT</span>
              <span className="pipe-node-sub">Compute n = p · q and Euler's totient φ(n) = (p-1)(q-1)</span>
            </div>
            <ArrowDown size={14} className="text-accent pipe-arrow" />
          </div>

          <div className="rsa-pipe-step">
            <div className="pipe-node">
              <span className="pipe-node-title">03. KEY DERIVATION</span>
              <span className="pipe-node-sub">Select e coprime to φ(n), derive d ≡ e⁻¹ mod φ(n)</span>
            </div>
            <ArrowDown size={14} className="text-accent pipe-arrow" />
          </div>

          <div className="rsa-pipe-keys-row">
            <div className="pipe-key-card key-public">
              <Lock size={13} className="text-accent" />
              <div className="key-info">
                <span className="key-type">PUBLIC KEY</span>
                <span className="key-spec">(e, n) · Encryption &amp; Verify</span>
              </div>
            </div>

            <div className="pipe-key-card key-private">
              <Key size={13} className="text-accent" />
              <div className="key-info">
                <span className="key-type">PRIVATE KEY</span>
                <span className="key-spec">(d, n) · Decryption &amp; Signing</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="flow-card-footer font-mono">
        <span>// CRYPTOGRAPHIC SPECIFICATION: 2048-BIT RSA-OAEP WITH SHA-256 PADDING SCHEME</span>
      </div>
    </div>
  );
};
