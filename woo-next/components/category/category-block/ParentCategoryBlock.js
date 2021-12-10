import link from "next/link";
import Link from 'next/link';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  imagecategory: {
    width: '300px',
    height: '320px',
  },
}
);

const ParentCategoryBlock = (props) =>{
  const classes = useStyles();
  const {category} = props;
    console.warn( category );

  return(
    <div className="col-lg-3 col-md-6 col-sm-12">
        <h1 className="card-header text-center">{ category.name}</h1>
        <Link as={`/category/${category.slug}-${category.id}`} href={`/category?slug=${category.slug}-${category.id}`}>
        <a>
          <img className={classes.imagecategory}
            src={category.images[0].src}
            alt="Product image" />
        </a>
      </Link>
    </div>
  )
};

export default ParentCategoryBlock;