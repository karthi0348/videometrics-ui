import React from 'react';
import { HeroSectionProps } from "@/app/home/types/hero";
import "../styles/hero.css";

export default function HeroSection({ className = "" }: HeroSectionProps) {
  // Data for different charts
  const barChartData = [
    { label: 'Jan', value: 65, color: '#3b82f6' },
    { label: 'Feb', value: 45, color: '#06b6d4' },
    { label: 'Mar', value: 78, color: '#10b981' },
    { label: 'Apr', value: 52, color: '#8b5cf6' },
    { label: 'May', value: 89, color: '#f59e0b' },
    { label: 'Jun', value: 72, color: '#ef4444' }
  ];

  const lineChartData = [
    { x: 0, y: 30 },
    { x: 20, y: 45 },
    { x: 40, y: 35 },
    { x: 60, y: 65 },
    { x: 80, y: 58 },
    { x: 100, y: 82 },
    { x: 120, y: 75 }
  ];

  const donutData = [
    { value: 40, color: '#3b82f6', label: 'Active' },
    { value: 30, color: '#06b6d4', label: 'Processing' },
    { value: 20, color: '#10b981', label: 'Complete' },
    { value: 10, color: '#ef4444', label: 'Error' }
  ];

  const waveformData = [
    15, 25, 35, 20, 45, 38, 52, 41, 48, 35, 42, 28, 55, 38, 45, 32, 48, 41, 35, 42
  ];

  // Bar Chart Component
  const BarChart = ({ data, width = 200, height = 120 }: { data: typeof barChartData, width?: number, height?: number }) => {
    const maxValue = Math.max(...data.map(d => d.value));
    const barWidth = (width - 40) / data.length - 8;
    
    return (
      <div className="chart-container">
        <svg width={width} height={height} className="chart-svg">
          <defs>
            <linearGradient id="barGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.8)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0.3)" />
            </linearGradient>
          </defs>
          {data.map((item, index) => {
            const barHeight = (item.value / maxValue) * (height - 40);
            const x = 20 + index * (barWidth + 8);
            const y = height - 20 - barHeight;
            
            return (
              <g key={index}>
                <rect
                  x={x}
                  y={y}
                  width={barWidth}
                  height={barHeight}
                  fill={item.color}
                  rx="4"
                  className="bar-animate"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                />
                <text
                  x={x + barWidth / 2}
                  y={height - 5}
                  textAnchor="middle"
                  className="chart-label-text"
                  fontSize="10"
                  fill="rgba(255,255,255,0.7)"
                >
                  {item.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    );
  };

  // Line Chart Component
  const LineChart = ({ data, width = 180, height = 100 }: { data: typeof lineChartData, width?: number, height?: number }) => {
    const maxY = Math.max(...data.map(d => d.y));
    const pathData = data.map((point, index) => {
      const x = (point.x / 120) * (width - 40) + 20;
      const y = height - 20 - (point.y / maxY) * (height - 40);
      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(' ');

    const areaPath = pathData + ` L ${(data[data.length - 1].x / 120) * (width - 40) + 20} ${height - 20} L 20 ${height - 20} Z`;

    return (
      <div className="chart-container">
        <svg width={width} height={height} className="chart-svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(16, 185, 129, 0.3)" />
              <stop offset="100%" stopColor="rgba(16, 185, 129, 0.05)" />
            </linearGradient>
          </defs>
          <path
            d={areaPath}
            fill="url(#lineGradient)"
            className="area-animate"
          />
          <path
            d={pathData}
            fill="none"
            stroke="#10b981"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="line-animate"
          />
          {data.map((point, index) => {
            const x = (point.x / 120) * (width - 40) + 20;
            const y = height - 20 - (point.y / maxY) * (height - 40);
            return (
              <circle
                key={index}
                cx={x}
                cy={y}
                r="4"
                fill="#10b981"
                className="dot-animate"
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            );
          })}
        </svg>
      </div>
    );
  };

  // Donut Chart Component
  const DonutChart = ({ data, size = 140 }: { data: typeof donutData, size?: number }) => {
    const radius = size / 2 - 20;
    const innerRadius = radius * 0.6;
    const total = data.reduce((sum, item) => sum + item.value, 0);
    
    let currentAngle = -90;
    
    const createArc = (startAngle: number, endAngle: number, innerR: number, outerR: number) => {
      const startAngleRad = (startAngle * Math.PI) / 180;
      const endAngleRad = (endAngle * Math.PI) / 180;
      const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
      
      const x1 = Math.cos(startAngleRad) * outerR;
      const y1 = Math.sin(startAngleRad) * outerR;
      const x2 = Math.cos(endAngleRad) * outerR;
      const y2 = Math.sin(endAngleRad) * outerR;
      
      const x3 = Math.cos(endAngleRad) * innerR;
      const y3 = Math.sin(endAngleRad) * innerR;
      const x4 = Math.cos(startAngleRad) * innerR;
      const y4 = Math.sin(startAngleRad) * innerR;
      
      return [
        "M", x1, y1,
        "A", outerR, outerR, 0, largeArcFlag, 1, x2, y2,
        "L", x3, y3,
        "A", innerR, innerR, 0, largeArcFlag, 0, x4, y4,
        "Z"
      ].join(" ");
    };

    return (
      <div className="chart-container">
        <svg width={size} height={size} className="chart-svg">
          <g transform={`translate(${size/2}, ${size/2})`}>
            {data.map((slice, index) => {
              const sliceAngle = (slice.value / total) * 360;
              const endAngle = currentAngle + sliceAngle;
              const path = createArc(currentAngle, endAngle, innerRadius, radius);
              currentAngle = endAngle;

              return (
                <path
                  key={index}
                  d={path}
                  fill={slice.color}
                  className="donut-slice"
                  style={{
                    animationDelay: `${index * 0.2}s`,
                    transformOrigin: '0 0'
                  }}
                />
              );
            })}
            <circle
              cx="0"
              cy="0"
              r={innerRadius}
              fill="rgba(255, 255, 255, 0.1)"
              className="donut-center"
            />
            <text
              x="0"
              y="0"
              textAnchor="middle"
              dominantBaseline="middle"
              className="donut-text"
              fill="rgba(255,255,255,0.9)"
              fontSize="16"
              fontWeight="600"
            >
              {total}%
            </text>
          </g>
        </svg>
      </div>
    );
  };

  // Radial Progress Component
  const RadialProgress = ({ percentage = 75, size = 120, color = "#3b82f6" }: { percentage?: number, size?: number, color?: string }) => {
    const radius = (size - 20) / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="chart-container">
        <svg width={size} height={size} className="chart-svg">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="8"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className="progress-circle"
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
          />
          <text
            x={size / 2}
            y={size / 2}
            textAnchor="middle"
            dominantBaseline="middle"
            className="progress-text"
            fill="rgba(255,255,255,0.9)"
            fontSize="18"
            fontWeight="700"
          >
            {percentage}%
          </text>
        </svg>
      </div>
    );
  };

  // Waveform Component
  const Waveform = ({ data, width = 160, height = 80 }: { data: number[], width?: number, height?: number }) => {
    const maxValue = Math.max(...data);
    const barWidth = (width - 20) / data.length - 2;
    
    return (
      <div className="chart-container">
        <svg width={width} height={height} className="chart-svg">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#0891b2" />
            </linearGradient>
          </defs>
          {data.map((value, index) => {
            const barHeight = (value / maxValue) * (height - 20);
            const x = 10 + index * (barWidth + 2);
            const y = (height - barHeight) / 2;
            
            return (
              <rect
                key={index}
                x={x}
                y={y}
                width={barWidth}
                height={barHeight}
                fill="url(#waveGradient)"
                rx="1"
                className="wave-bar"
                style={{
                  animationDelay: `${index * 0.05}s`
                }}
              />
            );
          })}
        </svg>
      </div>
    );
  };

  return (
    <section className={`section hero-section ${className}`}>
      <div className="hero-background">
        <div className="gradient-orb gradient-orb-1" />
        <div className="gradient-orb gradient-orb-2" />
        <div className="gradient-orb gradient-orb-3" />
        <div className="grid-pattern" />
        <div className="floating-particle particle-1" />
        <div className="floating-particle particle-2" />
        <div className="floating-particle particle-3" />
      </div>

      <div className="hero-container">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="badge-text">Visual Intelligence</span>
          </div>

          <div className="hero-heading">
            <h1 className="heading-text">
              <span className="heading-line">Turn Your Video</span>
              <span className="heading-line">Footage into Meaningful Insights</span>
            </h1>
          </div>

          <div className="hero-description">
            <p className="description-text">
              VideoMetrics.ai transforms CCTV and drone footage into real-time insights to help
              businesses optimize operations and make smarter decisions.
            </p>
          </div>

          <div className="hero-cta">
            <button className="cta-button">
              <span className="cta-text">Schedule Demo</span>
              <div className="cta-background" />
              <div className="cta-shimmer" />
            </button>
          </div>
        </div>

        <div className="hero-visual">
          {/* Main Dashboard with Bar Chart */}
          <div className="dashboard-card main-card">
            <div className="card-background" />
            <div className="card-glow" />
            <div className="card-content">
              <div className="chart-header">
                <h3>Monthly Analytics</h3>
              </div>
              <BarChart data={barChartData} width={280} height={140} />
            </div>
          </div>

          {/* Line Chart Card */}
          <div className="dashboard-card secondary-card">
            <div className="card-background" />
            <div className="card-glow" />
            <div className="card-content">
              <div className="chart-header">
                <h3>Performance Trend</h3>
              </div>
              <LineChart data={lineChartData} width={280} height={140} />
            </div>
          </div>

          {/* Floating Charts */}
          <div className="floating-chart chart-1">
            <div className="chart-card">
              <DonutChart data={donutData} size={120} />
              <div className="chart-title">Status Overview</div>
            </div>
          </div>

          <div className="floating-chart chart-2">
            <div className="chart-card">
              <RadialProgress percentage={82} size={100} color="#10b981" />
              <div className="chart-title">Efficiency</div>
            </div>
          </div>

          <div className="floating-chart chart-3">
            <div className="chart-card">
              <RadialProgress percentage={67} size={100} color="#f59e0b" />
              <div className="chart-title">Alerts</div>
            </div>
          </div>

          <div className="floating-chart chart-4">
            <div className="chart-card">
              <Waveform data={waveformData} width={140} height={70} />
              <div className="chart-title">Activity</div>
            </div>
          </div>

          <div className="floating-element floating-element-1" />
          <div className="floating-element floating-element-2" />
          <div className="floating-element floating-element-3" />
        </div>
      </div>
    </section>
  );
}