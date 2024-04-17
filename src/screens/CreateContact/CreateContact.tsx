import { useEffect, useState } from "react";
import { useUserState } from "../../redux/userSlice";
import RenderForm from "./RenderForm";
import { useGetFormByIdQuery } from "../../redux/api";
import styles from "./contact.module.scss";
import LeftArrow from "../../assets/svg/Arrowleft.svg";
import Attachments from "./Attachments";
import { useNavigate } from "react-router-dom";
import RenderTabs from "../../components/TabsComponent/RenderTabs";
import { useSubmitFormMutation } from "../../redux/crmApis";
import { toast } from "react-toastify";
import { useCrmContext } from "../../context/CRMcontext";

const CreateContactScreen = () => {
  const navigate = useNavigate();
  const userState = useUserState();
  const [activeTab, setActiveTab] = useState("GeneralInfomation");
  const [FieldData, setFieldData] = useState();
  const [Attachment, setAttachments] = useState();
  const Tabs: any = ["GeneralInfomation", "Attachments"];
  const { contactType } = useCrmContext();
  const { data, refetch } = useGetFormByIdQuery({
    token: userState.token,
    formName:
      contactType === "Individual"
        ? "IndividualCustomerForm"
        : "BusinessCustomerForm",
  });
  const [createCustomer] = useSubmitFormMutation();
  useEffect(() => {
    refetch();
  }, []);
  const handleSubmit = async () => {
    const response: any = await createCustomer({
      bodyData: {
        formName: "IndividualContactForm",
        attachments: Attachment,
        data: FieldData,
      },
      token: userState.token,
    });
    if (response?.data?.status === 200) {
      toast.success("Customer Created Successfully!", {
        position: "top-right",
      });
      navigate(-1);
    }
  };
  return (
    <>
      <div className={styles.header}>
        <div className={styles.heading}>
          <img onClick={() => navigate(-1)} src={LeftArrow} alt="arrow" />
          <h3>Create Contact</h3>
        </div>
        <p className={styles.description}>
          Here you can create individual contacts and can add them to contacts
          list
        </p>
      </div>
      <div className={styles.bodyContainer}>
        <RenderTabs
          setActiveTab={setActiveTab}
          activeTab={activeTab}
          Tabs={Tabs}
        />
        {activeTab === "GeneralInfomation" && (
          <RenderForm
            formfields={data?.data?.formFields}
            setFieldData={setFieldData}
          />
        )}
        {activeTab === "Attachments" && (
          <Attachments setAttachment={setAttachments} />
        )}
      </div>
      <div>
        <button className={styles.createButton} onClick={handleSubmit}>
          Create
        </button>
      </div>
    </>
  );
};

export default CreateContactScreen;
