import Masonry from "react-masonry-css";
import { motion } from "framer-motion";
import Item from "./Item";
import "../../../masonry.css"; 
import { blogPosts } from "../../../server/blogData";



const breakpoints = {
  default: 4,
  1020: 3,
  770: 2,
};

export default function Blog() {
    
    return (
        // <Grid container spacing={2}>
        //     {
        //         blogPosts.map(item => (
        //             <Grid item key={item.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
        //                 <Item obj={item} />
        //             </Grid>
        //         ))
        //     }
        // </Grid>
        <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
        >
        {blogPosts.map((item) => (
            <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            >
            <Item obj={item} />
            </motion.div>
        ))}
        </Masonry>
    );
}
