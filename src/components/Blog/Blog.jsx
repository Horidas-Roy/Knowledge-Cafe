import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';


const Blog = ({blog,handleAddToBookmark,handleMarkAsRead}) => {
    console.log(blog)
    const {tittle, cover_img, author,author_img, reading_time,hashtags,posted_date}=blog
    return (
        <div className='mb-20 p-14 pt-0'>
            <img className='w-full rounded-lg' src={cover_img} alt={`cover picture of the tittle ${tittle}`}></img>
            <div className='flex justify-between items-center'>
                <div className='flex gap-6 items-center'>
                     <img className='w-[60px] h-[60px] rounded-full mt-8' src={author_img}></img>
                     <div className='pt-6'>
                        <h3>{author}</h3>
                        <h3>{posted_date}</h3>
                     </div>
                </div>
                <div className='flex gap-3 items-center'>
                   <h3>{reading_time} min read</h3>
                   <button onClick={()=>handleAddToBookmark(blog)}><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h4 className='text-4xl font-bold mt-4'>{tittle}</h4> 
            <p  className='my-5'>
                {
                   hashtags.map((hash,idx)=><span key={idx}><a>{hash}</a></span>) 
                }
            </p>
            <button onClick={()=>handleMarkAsRead(reading_time)} className='text-blue-600 cursor-pointer font-bold underline'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes={
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead:PropTypes.func.isRequired
}
export default Blog;