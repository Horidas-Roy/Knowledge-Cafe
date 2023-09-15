import PropTypes from 'prop-types'
import Bookmark from '../bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3">
            <h2 className="text-3xl text-center">Bookmarked Blogs:{readingTime}</h2>
            <div className='text-2xl p-4 m-4 space-y-2'>
                {
                    bookmarks.map(bookmark=><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes={
    bookmarks:PropTypes.array.isRequired,
    readingTime:PropTypes.number.isRequired
}
export default Bookmarks;