import { Container } from "reactstrap";

const Tutorial = () => {
  const videoSources = [
    {
      title: " How to make videos and get payed on Paytok ",
      source: "https://www.youtube.com/embed/BX1WpL2VlhM",
    },
    {
      title: " How to submit your song on Paytok as an artist",
      source: "https://www.youtube.com/embed/rhjiANJVR6g",
    },
    {
      title: " How to pay for brand adverts on Paytok ",
      source: "https://www.youtube.com/embed/2FTx7DV7sv8",
    },
  ];

  return (
    <Container className="my-3">
      <h2 className="fs-1 fw-bold text-primary-orange text-center ">Tutorial</h2>
      {videoSources.map((video, index) => {
        return (
          <>
            <h5>
              <span className="text-primary-orange fw-bold fs-4">
                Step {index + 1}:
              </span>
              {video.title}
            </h5>
            <div className="row justify-content-center my-5">
              <div className="col-md-8">
                <div className="ratio ratio-21x9">
                  <iframe
                    src={video.source}
                    title="YouTube video"
                    allowFullScreen></iframe>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </Container>
  );
};

export default Tutorial;
