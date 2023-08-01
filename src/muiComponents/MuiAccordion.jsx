import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { LazyLoadImage } from "react-lazy-load-image-component";
import CircularProgress from "@mui/material/CircularProgress";

const MuiAccordion = (props) => {
  const { children, id, title, details, ...rest } = props;

  return (
    <Accordion
      style={{
        width: "100%",
        fontFamily: "Montserrat",
        backgroundColor: "#e16162",
        borderRadius: "15px",
        marginBottom: "10px",
      }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />} id={id}>
        <div className="accordion-div">
          {rest.icon?.src ? (
            <LazyLoadImage
              width="35px"
              height="35px"
              src={rest.icon.src}
              alt={rest.icon.alt}
              placeholderSrc={<CircularProgress color="success" />}
            />
          ) : (
            rest.icon
          )}

          <p style={{ color: "#fffffe" }}>
            <b>{title}</b>
          </p>
        </div>
      </AccordionSummary>

      <AccordionDetails>
        {children && !details ? (
          children
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <p style={{ color: "#fffffe" }}> {details}</p> {children}
          </div>
        )}
      </AccordionDetails>
    </Accordion>
  );
};

export default MuiAccordion;
