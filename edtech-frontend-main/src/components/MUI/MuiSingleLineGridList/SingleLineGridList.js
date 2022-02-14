import React from "react";

// imports for 3rd party libraries
import PropTypes from "prop-types";

// imports for components from Material UI library
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";

// imports for styles
import { useStyles } from "./styles.js";

const SingleLineGridList = ({ width, data, handleClick }) => {
  const classes = useStyles();

  const getGridListCols = () => {
    if (isWidthUp("xl", width) || isWidthUp("lg", width)) {
      return 3;
    }

    if (isWidthUp("md", width)) {
      return 2;
    }

    return 1;
  };

  return (
    <section className={classes.gridListContainer}>
      <GridList className={classes.gridList} cols={getGridListCols()}>
        {data.map((tile) => (
          <GridListTile
            key={tile._id}
            className={classes.gridListItem}
            onClick={() => handleClick(tile)}
          >
            <img src={tile.imageURL} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </GridListTile>
        ))}
      </GridList>
    </section>
  );
};

SingleLineGridList.propTypes = {
  width: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export const EnhancedSingleLineGridList = withWidth()(SingleLineGridList);
