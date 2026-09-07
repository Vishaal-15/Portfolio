import React, { useState } from 'react';
import { Network, Router, Cpu, ArrowDown, ArrowRightLeft, Layers, ShieldCheck } from 'lucide-react';

interface NetworkNodeDetail {
  title: string;
  desc: string;
  protocol: string;
}

const NETWORK_DETAILS: Record<string, NetworkNodeDetail> = {
  bgp: {
    title: 'BGP Routing Interconnect',
    desc: 'Simulated exterior gateway routing between autonomous systems for scalable policy routing.',
    protocol: 'Border Gateway Protocol (BGP)'
  },
  ospf: {
    title: 'OSPF Interior Routing Tier',
    desc: 'Configured link-state interior gateway routing for dynamic intra-domain shortest path determination.',
    protocol: 'Open Shortest Path First (OSPF Area 0)'
  },
  switch: {
    title: 'Enterprise Switch Layer',
    desc: 'L2/L3 segmentation, VLAN trunking, and packet forwarding across simulated virtual interfaces.',
    protocol: 'Switch Management & VLANs'
  },
  vnet: {
    title: 'Virtual Network Topologies',
    desc: 'Linux-based network administration and hybrid cloud connectivity across simulated endpoints.',
    protocol: 'Virtual Topologies & Hybrid Cloud'
  }
};

export const NetworkArchitecture: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <div className="network-architecture-wrapper" aria-label="Enterprise Networking Routing Lab Simulation">
      <div className="network-arch-header">
        <div className="network-arch-title font-mono">
          <Network size={14} className="text-accent" />
          <span>NETWORK LAB · ENTERPRISE ROUTING TOPOLOGY</span>
        </div>
        <div className="network-arch-tag font-mono">
          <span>SIMULATED ENVIRONMENT</span>
        </div>
      </div>

      <div className="network-diagram-container">
        {/* Top Tier: Dual Routers with BGP Peering */}
        <div className="net-tier-routers">
          <button
            type="button"
            className={`net-node-box ${activeItem === 'bgp' ? 'node-active' : ''}`}
            onClick={() => setActiveItem(activeItem === 'bgp' ? null : 'bgp')}
            onMouseEnter={() => setActiveItem('bgp')}
          >
            <div className="net-node-icon"><Router size={14} /></div>
            <div className="net-node-info font-mono">
              <span className="net-title">ROUTER A</span>
              <span className="net-sub">Edge Gateway</span>
            </div>
          </button>

          <div className="net-connector-bgp font-mono" onClick={() => setActiveItem('bgp')}>
            <span className="bgp-line" aria-hidden="true" />
            <div className="bgp-pill">
              <ArrowRightLeft size={11} className="text-accent" />
              <span>BGP PEERING</span>
            </div>
            <span className="bgp-line" aria-hidden="true" />
          </div>

          <button
            type="button"
            className={`net-node-box ${activeItem === 'bgp' ? 'node-active' : ''}`}
            onClick={() => setActiveItem(activeItem === 'bgp' ? null : 'bgp')}
            onMouseEnter={() => setActiveItem('bgp')}
          >
            <div className="net-node-icon"><Router size={14} /></div>
            <div className="net-node-info font-mono">
              <span className="net-title">ROUTER B</span>
              <span className="net-sub">AS Peer</span>
            </div>
          </button>
        </div>

        {/* Middle Tier: OSPF Downlink */}
        <div className="net-tier-downlink font-mono" onClick={() => setActiveItem('ospf')}>
          <div className="ospf-line-vertical" />
          <div className="ospf-badge">
            <ArrowDown size={11} className="text-accent" />
            <span>OSPF AREA 0</span>
          </div>
          <div className="ospf-line-vertical" />
        </div>

        {/* Switch Layer */}
        <div className="net-tier-switch">
          <button
            type="button"
            className={`net-node-box net-node-wide ${activeItem === 'switch' ? 'node-active' : ''}`}
            onClick={() => setActiveItem(activeItem === 'switch' ? null : 'switch')}
            onMouseEnter={() => setActiveItem('switch')}
          >
            <div className="net-node-icon"><Cpu size={14} /></div>
            <div className="net-node-info font-mono">
              <span className="net-title">ENTERPRISE SWITCH &amp; INTERFACE MANAGEMENT</span>
              <span className="net-sub">L2/L3 Routing, VLAN Segmentation &amp; Linux Administration</span>
            </div>
          </button>
        </div>

        {/* Final Downlink to Virtual Network */}
        <div className="net-tier-downlink font-mono">
          <ArrowDown size={12} className="text-accent" />
        </div>

        {/* Virtual Network Topologies Layer */}
        <div className="net-tier-vnet">
          <button
            type="button"
            className={`net-node-box net-node-wide net-node-accent ${activeItem === 'vnet' ? 'node-active' : ''}`}
            onClick={() => setActiveItem(activeItem === 'vnet' ? null : 'vnet')}
            onMouseEnter={() => setActiveItem('vnet')}
          >
            <div className="net-node-icon"><Layers size={14} /></div>
            <div className="net-node-info font-mono">
              <span className="net-title">VIRTUAL NETWORK TOPOLOGIES &amp; HYBRID CLOUD</span>
              <span className="net-sub">Isolated Subnets · Cloud Networking Fundamentals · Linux Host Interconnect</span>
            </div>
          </button>
        </div>
      </div>

      {/* Interactive Detail Box */}
      {activeItem && NETWORK_DETAILS[activeItem] && (
        <div className="net-info-callout font-mono" role="status">
          <div className="info-header">
            <ShieldCheck size={13} className="text-accent" />
            <span className="info-title">{NETWORK_DETAILS[activeItem].title}</span>
            <span className="info-tech">{NETWORK_DETAILS[activeItem].protocol}</span>
          </div>
          <p className="info-text">{NETWORK_DETAILS[activeItem].desc}</p>
        </div>
      )}

      <div className="network-arch-footer font-mono">
        <span>// CONCEPTUAL ENTERPRISE ROUTING LAB DIAGRAM · SIMULATION &amp; HYBRID ARCHITECTURE</span>
      </div>
    </div>
  );
};
