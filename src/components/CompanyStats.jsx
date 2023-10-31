import React from "react";
import partners from "../assets/stats/partners.png";
import countries from "../assets/stats/countries.png";
import yearsOfExperience from "../assets/stats/yearsOfExperience.png";
import emplyoees from "../assets/stats/emplyoees.png";
import completed from "../assets/stats/completed.png";

const CompanyStats = () => {
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-NeutralSilver py-16 ">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="md:w-1/2">
          <h2 className="text-4xl text-NeutralD_Grey font-semibold mb-4 md:w-2/3 ">
            Helping a local and International <br></br>
            <span className="text-BrandPrimary">business reinvent itself</span>
          </h2>
          <p className="md:w-3/4 text-NeutralGrey mb-8">
            We are always dedicated to our valuable Clients.
          </p>
        </div>
        {/* stats */}
        <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12 ">
          {/* first col of stats */}
          <div className=" space-y-8">
            <div className=" items-center gap-4">
              <img src={partners} alt="" />
              <div>
                <h4 className="text-2xl text-NeutralGrey font-semibold ">
                  {" "}
                  5+
                </h4>
                <h5 className="text-NeutralD_Grey">Tech Partners</h5>
              </div>
            </div>
            <div className=" items-center gap-4">
              <img src={countries} alt="" />
              <div>
                <h4 className="text-2xl text-NeutralGrey font-semibold ">
                  {" "}
                  5+
                </h4>
                <h5 className="text-NeutralD_Grey">Countries Served</h5>
              </div>
            </div>
          </div>

          {/* second col of stats */}
          <div className=" space-y-8">
            <div className=" items-center gap-4">
              <img src={emplyoees} alt="" />
              <div>
                <h4 className="text-2xl text-NeutralGrey font-semibold ">
                  {" "}
                  80+
                </h4>
                <h5 className="text-NeutralD_Grey">IT Professionals</h5>
              </div>
            </div>
            <div className=" items-center gap-4">
              <img src={completed} alt="" />
              <div>
                <h4 className="text-2xl text-NeutralGrey font-semibold ">
                  {" "}
                  500+
                </h4>
                <h5 className="text-NeutralD_Grey">Projects Completed</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyStats;
