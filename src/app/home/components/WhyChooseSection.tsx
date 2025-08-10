import { features } from "@/app/home/types/whychoose";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/home/styles/whychoose.css";

export default function WhyChooseSection() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-6">
            <h2 className="display-6 fw-normal text-dark mb-2">Why Choose</h2>
            <h2 className="display-6 fw-bold mb-0" style={{ color: "#14b8a6" }}>
              videometrics.ai
            </h2>
          </div>
          <div className="col-lg-6">
            <h4 className="text-muted fs-6 mt-3">
              Transform your video surveillance into a powerful business
              intelligence platform. Our AI-powered analytics deliver actionable
              insights that drive growth and operational excellence.
            </h4>
          </div>
        </div>

        <div className="row align-items-center mb-5">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="position-relative rounded overflow-hidden shadow-lg">
              <img
                src="/images/drone.png"
                alt="Professional using drone for video surveillance"
                className="img-fluid w-100"
                style={{ height: "600px", objectFit: "cover" }}
              />
              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(20, 184, 166, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)",
                }}
              ></div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="ps-lg-4">
              <div className="mb-4">
                <h3 className="fw-bold mb-1" style={{ color: "#14b8a6" }}>
                  99.8%
                </h3>
                <h6 className="text-dark fw-semibold mb-2">
                  Detection Accuracy
                </h6>
                <p className="text-muted fs-6">
                  Our advanced AI models are trained on diverse video datasets
                  to ensure near-perfect detection accuracy, minimizing false
                  alerts and capturing critical moments with precision.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="fw-bold mb-1" style={{ color: "#14b8a6" }}>
                  50ms
                </h3>
                <h6 className="text-dark fw-semibold mb-2">Processing Speed</h6>
                <p className="text-muted fs-6">
                  With ultra-fast edge and cloud-based processing,
                  VideoMetrics.ai delivers insights in under 50
                  milliseconds—ideal for time-sensitive operations and instant
                  decision-making.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="fw-bold mb-1" style={{ color: "#14b8a6" }}>
                  24/7
                </h3>
                <h6 className="text-dark fw-semibold mb-2">
                  Real-time Monitoring
                </h6>
                <p className="text-muted fs-6">
                  Our systems run continuously, analyzing live feeds round the
                  clock to detect events as they happen— without the need for
                  manual supervision.
                </p>
              </div>

              <div className="mb-0">
                <h3 className="fw-bold mb-1" style={{ color: "#14b8a6" }}>
                  40%
                </h3>
                <h6 className="text-dark fw-semibold mb-2">Cost Reduction</h6>
                <p className="text-muted fs-6">
                  Automate manual monitoring tasks, optimize resource
                  allocation, and reduce operational overhead— achieving up to
                  40% cost savings across surveillance and analysis workflows.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4 mt-5">
          {features.map((feature) => (
            <div className="col-md-6 col-lg-4" key={feature.id}>
              <div
                className="card h-100 border-0 shadow-sm bg-white position-relative custom-card"

              >
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div
                      className="rounded d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                      style={{
                        width: "56px",
                        height: "56px",
                        background:
                          "linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%)",
                      }}
                    >
                      <svg
                        className="text-white"
                        width="28"
                        height="28"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d={feature.iconPath}
                        />
                      </svg>
                    </div>
                    <h5 className="card-title mb-0 fw-semibold text-dark">
                      {feature.title}
                    </h5>
                  </div>

                  <p className="card-text text-muted fs-6 mb-3 lh-base">
                    {feature.description}
                  </p>

                  <div className="d-flex align-items-center">
                    <span
                      className="rounded-circle me-2 flex-shrink-0"
                      style={{
                        width: "8px",
                        height: "8px",
                        backgroundColor: "#14b8a6",
                      }}
                    ></span>
                    <span className="text-muted small fw-medium">
                      {feature.badge}
                    </span>
                  </div>
                </div>

       
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
