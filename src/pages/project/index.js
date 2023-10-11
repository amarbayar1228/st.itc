import Arrow from "@/components/assist/arrow";
import Breadcrumb from "@/components/breadcrumb";
import Footer from "@/components/footer";
import ProjectComp from "@/components/project";

const Project = () => {
  return (
    <div>
      <Breadcrumb name="Төсөл орлого" router={"project"} />
      <ProjectComp />
      <Footer />
    </div>
  );
};
export default Project;
