import DadaJiSketchPhoto from "../assets/images/DesktopViewImage/AboutUsImage/DadaJiSketchPhoto.png";

function AboutUs() {
  return (
    <>
      <div style={{ backgroundColor: "#F2D2BDA6" }}>
        <h1 className="text-center pt-2">About Us</h1>
        <div class="row px-5 py-4" style={{ width: "100%" }}>
          <div class="col-md-6 how-img text-center">
            {/* <img
              src={DadaJiSketchPhoto}
              class="img-fluid h-sm-25"
              alt=""
              style={{
                height: "50vh",
                width: "100%",
              }}
            /> */}
            <img
              src={DadaJiSketchPhoto}
              class="img-fluid"
              alt=""
              style={{
                width: "100%",
              }}
            />
          </div>
          <div class="col-md-6 pt-md-0 pt-3">
            <p style={{ fontSize: "large" }}>
              Every brand has a beginning. Ours began with skilled hands, honest
              craftsmanship, and a deep respect for comfort and design.
              <br />
              <br />
              The journey started in Mumbai with Abdullah Daud Bajiya, a master
              sofa upholsterer whose dedication to quality laid the foundation
              for what would become a multi-generational legacy. With precision,
              patience, and pride in his work, he established Younus Upholster,
              building a reputation for reliability and fine workmanship.
              <br />
              <br />
              As the years passed, the craft evolved. The business expanded
              beyond upholstery into loose furniture, sofas, and soft
              furnishing, meeting the growing needs of homes and clients who
              valued both durability and design.
              <br />
              <br />
              The next chapter began when Abdul Kareem Abdullah Bajiya, Abdullah
              Daud Bajiya’s son, took over the company. Under his leadership,
              manufacturing was broadened across all aspects of furniture,
              strengthening the brand’s capabilities and scale while preserving
              its artisanal roots.
              <br />
              <br />
              The legacy continued into the third generation with Mohommed Yunus
              Abdul Karim Bajiya, whose vision brought a new dimension to the
              business. He introduced home décor, interior design, and fit-out
              solutions, transforming the company from a furniture manufacturer
              into a complete interior solutions brand.
              <br />
              <br />
              With ambition that crossed borders, the work expanded from Mumbai
              to Dubai, blending traditional craftsmanship with modern, global
              design sensibilities.
              <br />
              <br />
              Today, this evolution is reflected in our new identity: Spell
              Bound Home Decor.
              <br />
              <br />
              Spell Bound Home Decor stands for timeless craftsmanship,
              thoughtful design, and spaces that leave a lasting impression.
              Rooted in decades of experience and driven by contemporary vision,
              we create interiors that feel personal, functional, and truly
              spellbinding.
              <br />
            </p>
            {/* <p class="text-muted">
              Freedom to work on ideal projects. On GetLance, you run your own
              business and choose your own clients and projects. Just complete
              your profile and we’ll highlight ideal jobs. Also search projects,
              and respond to client invitations. Wide variety and high pay.
              Clients are now posting jobs in hundreds of skill categories,
              paying top price for great work. More and more success. The
              greater the success you have on projects, the more likely you are
              to get hired by clients that use GetLance.
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
