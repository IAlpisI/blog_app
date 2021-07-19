import { TagRow } from './'
import { Post } from '../models/post.model'

export default function MasonryPost({ post, tagsOnTop }: Post): JSX.Element {
  const windowWidth = window.innerWidth
  const imageBackground = {
    backgroundImage: `url("${
      require(`../../assets/images/${post.image}`).default
    }")`,
  }

  const style =
    windowWidth > 900 ? { ...imageBackground, ...post.style } : imageBackground
  console.log('test ' + style)

  return (
    <a className='masonry-post overlay' style={style} href={post.link}>
      <div
        className='image-text'
        style={{ justifyContent: tagsOnTop ? 'space-between' : 'flex-end' }}
      >
        <TagRow tags={post.categories} />
        <div className=''>
          <h2 className='image-title'>{post.title}</h2>
          <span className='image-date'>{post.date}</span>
        </div>
      </div>
    </a>
  )
}
