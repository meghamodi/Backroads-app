import { tours } from '../data'
import Title from './Title'
export function Tours() {
  return (
    <section className='section' id='tours'>
      <Title title='featured' subTitle='tours' />

      <div className='section-center featured-center'>
        {tours.map(tour => {
          return (
            <article className='tour-card' key={tour.id}>
              <div className='tour-img-container'>
                <img src={tour.image} className='tour-img' alt='' />
                <p className='tour-date'>{tour.date}</p>
              </div>
              <div className='tour-info'>
                <div className='tour-title'>
                  <h4>{tour.title}</h4>
                </div>
                <p>{tour.text}</p>
                <div className='tour-footer'>
                  <p>
                    <span>
                      <i className='fas fa-map'></i>
                    </span>{' '}
                    {tour.location}
                  </p>
                  <p>{tour.duration}</p>
                  <p>{tour.range}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
export default Tours
