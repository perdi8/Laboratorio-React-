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
import { MemberDetailGithubEntity } from "./member-detail-github.vm";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 400,
    alignContent: "center",
    backgroundColor: "#f5efd1",
  },

  media: {
    height: 0,
    maxWidth: 250,
    padding: "40%",
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
  icon: {
    backgroundColor: red[500],
  },
}));

interface Props {
  ParamsId: string;
  member: MemberDetailGithubEntity;
  onClickBack: (event) => void;
}

export const MemberDetailGithubComponent: React.FC<Props> = (props) => {
  const { ParamsId, member, onClickBack } = props;
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
            <Avatar aria-label="recipe" className={classes.icon}>
              {member.followers}
            </Avatar>
          }
          title={ParamsId}
          subheader={member.company}
        />
        <CardMedia
          className={classes.media}
          image={member.avatar_url}
          title=""
        />
        <CardContent>
          <Typography variant="subtitle1" color="textSecondary" component="p">
            Location: {member.location}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" component="p">
            Followers: {member.followers}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" component="p">
            Public repository: {member.public_repos}
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
            <Typography paragraph>Bio:</Typography>
            <Typography paragraph>{member.bio}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};
