import { features } from "@/app/home/types/whychoose";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/home/styles/whychoose.css";

export default function WhyChooseSection() {
  return (
    <section className="section py-3 py-md-5 bg-light section-chamfered">
      <div className="container">
        <div className="row mb-3 mb-md-5">
          <div className="col-lg-6 text-center text-lg-start mb-3 mb-lg-0">
            <h2 className="titleText fw-normal text-dark mb-1 mb-md-2">Why Choose</h2>
            <h2 className="titleText fw-bold mb-0" style={{ color: "rgb(81, 77, 223)" }}>
              videometrics
            </h2>
          </div>
          <div className="col-lg-6">
            <h4 className="text-muted fs-6 fs-md-5 mt-2 mt-md-3 text-center text-lg-start">
              Transform your video surveillance into a powerful business
              intelligence platform. Our AI-powered analytics deliver actionable
              insights that drive growth and operational excellence.
            </h4>
          </div>
        </div>

        <div className="row align-items-center mb-4 mb-md-5">
          <div className="col-lg-6 mb-3 mb-lg-0 order-1 order-lg-1">
            <div className="position-relative rounded overflow-hidden shadow-lg">
              <Image
                src="/images/droneman.png"
                alt="Professional using drone for video surveillance"
                className="img-fluid w-100 responsive-image"
                style={{ 
                  height: "auto",
                  minHeight: "250px",
                  maxHeight: "600px",
                  objectFit: "cover"
                }}
                width={600}
                height={400}
                priority
                sizes="(max-width: 576px) 100vw, (max-width: 992px) 90vw, 50vw"
              />
              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(81, 77, 223, 0.1) 0%, rgba(135, 40, 212, 0.1) 100%)",
                }}
              ></div>
            </div>
          </div>

          <div className="col-lg-6 order-2 order-lg-2">
            <div className="ps-lg-4">
              <div className="mb-3 mb-md-4 text-center text-lg-start">
                <h3 className="statNumber fw-bold mb-1" style={{ color: "rgb(81, 77, 223)",fontSize: "2rem" }}>
                  99.8%
                </h3>
                <h6 className="text-dark fw-semibold mb-2 fs-6 fs-md-5">
                  Detection Accuracy
                </h6>
                <p className="text-muted fs-6 fs-md-5 lh-base">
                  Our advanced AI models are trained on diverse video datasets
                  to ensure near-perfect detection accuracy, minimizing false
                  alerts and capturing critical moments with precision.
                </p>
              </div>

              <div className="mb-3 mb-md-4 text-center text-lg-start">
                <h3 className="statNumber fw-bold mb-1" style={{ color: "rgb(81, 77, 223)",fontSize: "2rem" }}>
                  50ms
                </h3>
                <h6 className="text-dark fw-semibold mb-2 fs-6 fs-md-5">Processing Speed</h6>
                <p className="text-muted fs-6 fs-md-5 lh-base">
                  With ultra-fast edge and cloud-based processing,
                  VideoMetrics delivers insights in under 50
                  milliseconds—ideal for time-sensitive operations and instant
                  decision-making.
                </p>
              </div>

              <div className="mb-3 mb-md-4 text-center text-lg-start">
                <h3 className="statNumber fw-bold mb-1" style={{ color: "rgb(81, 77, 223)",fontSize: "2rem" }}>
                  24/7
                </h3>
                <h6 className="text-dark fw-semibold mb-2 fs-6 fs-md-5">
                  Real-time Monitoring
                </h6>
                <p className="text-muted fs-6 fs-md-5 lh-base">
                  Our systems run continuously, analyzing live feeds round the
                  clock to detect events as they happen— without the need for
                  manual supervision.
                </p>
              </div>

              <div className="mb-0 text-center text-lg-start">
                <h3 className="statNumber fw-bold mb-1" style={{ color: "rgb(81, 77, 223)",fontSize: "2rem" }}>
                  40%
                </h3>
                <h6 className="text-dark fw-semibold mb-2 fs-6 fs-md-5">Cost Reduction</h6>
                <p className="text-muted fs-6 fs-md-5 lh-base">
                  Automate manual monitoring tasks, optimize resource
                  allocation, and reduce operational overhead— achieving up to
                  40% cost savings across surveillance and analysis workflows.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-3 g-md-4 mt-3 mt-md-5">
          {features.map((feature) => (
            <div className="col-sm-6 col-lg-4" key={feature.id}>
              <div className="card h-100 border-0 shadow-sm bg-white position-relative custom-card">
                <div className="card-body p-3 p-md-4">
                  <div className="d-flex align-items-center align-items-md-center mb-3 flex-column flex-md-row text-center text-md-start">
                    <div
                      className="rounded d-flex align-items-center justify-content-center mb-2 mb-md-0 me-md-3 flex-shrink-0 mx-auto mx-md-0"
                      style={{
                        width: "48px",
                        height: "48px",
                        background:
                          "linear-gradient(135deg, rgb(81, 77, 223) 0%, rgb(135, 40, 212) 100%)",
                      }}
                    >
                      <svg
                        className="text-white"
                        width="24"
                        height="24"
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
                    <h5 className="card-title mb-0 fw-semibold  fs-6 fs-md-5 text-center">
                      {feature.title}
                    </h5>
                  </div>

                  <p className="card-text text-muted fs-6 mb-3 lh-base text-center text-md-start">
                    {feature.description}
                  </p>

                  <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                    <span
                      className="rounded-circle me-2 flex-shrink-0"
                      style={{
                        width: "6px",
                        height: "6px",
                        backgroundColor: "rgb(81, 77, 223)",
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