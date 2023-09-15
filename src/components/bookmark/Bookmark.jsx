import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
    const {tittle}=bookmark
    console.log(tittle)
    return (
        <div className='bg-slate-200 rounded-xl p-4'>
            <h3 className='text-2xl text-start'>{tittle}</h3>
        </div>
    );
};

Bookmark.propTypes={
    bookmark:PropTypes.object.isRequired

}
export default Bookmark;