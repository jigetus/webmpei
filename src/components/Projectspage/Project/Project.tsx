import React, { Component } from "react";
import { AppState } from "../../../redux";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { CardMedia } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

class Project extends Component<PropsFromRedux> {
  generateColor(): string {
    return (
      "#" +
      Math.random()
        .toString(16)
        .substr(-6)
    );
  }
  render() {
    return (
      <Card style={{ maxWidth: "300px" }}>
        <CardActionArea>
          <CardMedia
            style={{
              height: "3px",
              width: "100%",
              background: this.generateColor()
            }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              lab11213412111111111111111111111111111111111111111111111111111111111111111
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Открыть
          </Button>
          <Button size="small" color="primary">
            Удалить
          </Button>
        </CardActions>
      </Card>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  files: state.files.files
});

const connector = connect(mapStateToProps, {});

// @ts-ignore
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(Project);
