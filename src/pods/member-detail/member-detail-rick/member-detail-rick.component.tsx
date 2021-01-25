import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { MemberDetailRickEntity } from "./member-detail-rick.vm";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 400,
    alignContent: "center",
    backgroundColor: "#d1f0f5",
  },
  media: {
    height: 0,
    maxWidth: 250,
    padding: "20%",
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

interface Props {
  member: MemberDetailRickEntity;
  onClickBack: (event) => void;
}

export const MemberDetailRickComponent: React.FC<Props> = (props) => {
  const { member, onClickBack } = props;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {member.id}
            </Avatar>
          }
          title={""}
          subheader={member.name}
        />
        <CardMedia className={classes.media} image={member.image} title="" />
        <CardContent>
          <Typography variant="subtitle1" color="textSecondary" component="p">
            Specie: {member.species}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" component="p">
            Status: {member.status}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" component="p">
            Gender: {member.gender}
          </Typography>
        </CardContent>
        <CardActions disableSpacing></CardActions>
        <CardActions disableSpacing>
          <ArrowBackIcon onClick={(e) => onClickBack(e)} />
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Go to page:</Typography>
            <Typography paragraph>
              <a href="https://rickandmortyapi.com">
                https://rickandmortyapi.com
              </a>
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};
