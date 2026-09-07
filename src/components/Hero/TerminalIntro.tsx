import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../../config/portfolioData';
import { Terminal, Copy, Check } from 'lucide-react';
import './TerminalIntro.css';

interface TerminalIntroProps {
  onComplete?: () => void;
}

export const TerminalIntro: React.FC<TerminalIntroProps> = ({ onComplete }) => {
  const [step, setStep] = useState<number>(0);
  const [cmd1Text, setCmd1Text] = useState<string>('');
  const [cmd2Text, setCmd2Text] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const fullCmd1 = 'whoami';
  const fullCmd2 = 'cat profile.txt';

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCmd1Text(fullCmd1);
      setCmd2Text(fullCmd2);
      setStep(5);
      if (onComplete) onComplete();
      return;
    }

    let timeoutId: ReturnType<typeof setTimeout>;

    // Step 0: Type 'whoami' fast (35ms per char)
    if (step === 0) {
      if (cmd1Text.length < fullCmd1.length) {
        timeoutId = setTimeout(() => {
          setCmd1Text(fullCmd1.slice(0, cmd1Text.length + 1));
        }, 32);
      } else {
        timeoutId = setTimeout(() => {
          setStep(1); // Reveal identity output
        }, 120);
      }
    } 
    // Step 1: Identity output shown, short pause then start typing 'cat profile.txt'
    else if (step === 1) {
      timeoutId = setTimeout(() => {
        setStep(2);
      }, 150);
    } 
    // Step 2: Type 'cat profile.txt' fast (28ms per char)
    else if (step === 2) {
      if (cmd2Text.length < fullCmd2.length) {
        timeoutId = setTimeout(() => {
          setCmd2Text(fullCmd2.slice(0, cmd2Text.length + 1));
        }, 26);
      } else {
        timeoutId = setTimeout(() => {
          setStep(3); // Reveal mission statement
        }, 140);
      }
    } 
    // Step 3: Show mission statement output
    else if (step === 3) {
      timeoutId = setTimeout(() => {
        setStep(4); // Show final prompt with blinking cursor
        if (onComplete) onComplete();
      }, 160);
    }

    return () => clearTimeout(timeoutId);
  }, [step, cmd1Text, cmd2Text, onComplete]);

  const handleCopyProfile = () => {
    const text = `whoami\n${PORTFOLIO_DATA.name}\n${PORTFOLIO_DATA.title}\n${PORTFOLIO_DATA.secondaryTitle}\n\ncat profile.txt\nBuilding secure systems,\nreal-time detection platforms,\nand intelligent security solutions.`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSkipAnimation = () => {
    setCmd1Text(fullCmd1);
    setCmd2Text(fullCmd2);
    setStep(4);
    if (onComplete) onComplete();
  };

  return (
    <div className="terminal-window technical-bracket font-mono" aria-label="Interactive Linux Terminal Intro">
      {/* Title Bar */}
      <div className="terminal-header">
        <div className="terminal-controls" aria-hidden="true">
          <span className="dot dot-close" />
          <span className="dot dot-minimize" />
          <span className="dot dot-expand" />
        </div>
        <div className="terminal-title">
          <Terminal size={13} className="terminal-icon" />
          <span>{PORTFOLIO_DATA.terminalUser}@{PORTFOLIO_DATA.systemHost}: ~</span>
        </div>
        <div className="terminal-actions">
          {step < 4 ? (
            <button 
              type="button" 
              className="terminal-skip-btn" 
              onClick={handleSkipAnimation}
              title="Skip typing animation"
            >
              [SKIP]
            </button>
          ) : (
            <button 
              type="button" 
              className="terminal-copy-btn" 
              onClick={handleCopyProfile}
              title="Copy terminal session"
            >
              {copied ? <Check size={12} className="text-accent" /> : <Copy size={12} />}
            </button>
          )}
        </div>
      </div>

      {/* Terminal Content */}
      <div className="terminal-body">
        {/* Command 1 */}
        <div className="terminal-line">
          <span className="prompt-user">{PORTFOLIO_DATA.terminalUser}@{PORTFOLIO_DATA.systemHost}</span>
          <span className="prompt-separator">:</span>
          <span className="prompt-path">~</span>
          <span className="prompt-char">$</span>
          <span className="terminal-cmd">{cmd1Text}</span>
          {step === 0 && <span className="cursor-blink" />}
        </div>

        {/* Output 1 */}
        {step >= 1 && (
          <div className="terminal-output identity-output">
            <div className="output-line highlight-name">{PORTFOLIO_DATA.name}</div>
            <div className="output-line text-accent">{PORTFOLIO_DATA.title}</div>
            <div className="output-line text-secondary">{PORTFOLIO_DATA.secondaryTitle}</div>
          </div>
        )}

        {/* Command 2 */}
        {step >= 2 && (
          <div className="terminal-line cmd2-line">
            <span className="prompt-user">{PORTFOLIO_DATA.terminalUser}@{PORTFOLIO_DATA.systemHost}</span>
            <span className="prompt-separator">:</span>
            <span className="prompt-path">~</span>
            <span className="prompt-char">$</span>
            <span className="terminal-cmd">{cmd2Text}</span>
            {step === 2 && <span className="cursor-blink" />}
          </div>
        )}

        {/* Output 2 */}
        {step >= 3 && (
          <div className="terminal-output statement-output">
            <div className="output-line">Building secure systems,</div>
            <div className="output-line">real-time detection platforms,</div>
            <div className="output-line">and intelligent security solutions.</div>
          </div>
        )}

        {/* Final Prompt Line */}
        {step >= 4 && (
          <div className="terminal-line final-prompt">
            <span className="prompt-user">{PORTFOLIO_DATA.terminalUser}@{PORTFOLIO_DATA.systemHost}</span>
            <span className="prompt-separator">:</span>
            <span className="prompt-path">~</span>
            <span className="prompt-char">$</span>
            <span className="cursor-blink" />
          </div>
        )}
      </div>
    </div>
  );
};
