import React, { useState } from "react";
import ProducerOrgSearchForm from "./producerorgsearchform";
import CreateProducerOrgForm from "./createproducerorgform";
import ProducerOrgList from "./producerorglist";

const ManageProducerOrg = (props) => {
  const [showCreateForm, setShowCreateForm] = useState(false);

  const onCreate = () => {
    console.log("onCreate called");
    setShowCreateForm(true);
  };

  const onCloseCreateForm = () => {
    console.log("onCloseCreateForm called");
    setShowCreateForm(false);
  };

  const orgList = React.useMemo(
    () => [
      {
        Name: "Holy cross",
        RegistrationNumber: "201829",
        AddressLine1: "52, New colony",
        AddressLine2: "Near  subbaiah vidyalayam school",
        City: "Thoothukudi",
        Pincode: "628002",
        State: "Tamil Nadu",
      },
    ],
    []
  );

  return (
    <div>
      <h1 className="text-center">Manage Producer Organization Details</h1>
      <div className="container border shadow rounded py-3 mt-5">
        {showCreateForm ? (
          <CreateProducerOrgForm
            onCloseCreateProducerOrgForm={onCloseCreateForm}
          />
        ) : (
          <div className="row">
            <div className="text-center">
              <button
                type="button"
                className="btn btn-primary"
                onClick={onCreate}
              >
                Add New Producer Organization
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="container border shadow rounded py-3 mt-5">
        <ProducerOrgSearchForm />
        <ProducerOrgList data={orgList} />
      </div>
    </div>
  );
};

export default ManageProducerOrg;
