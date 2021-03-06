import Image from 'next/image'

const Avatar = ({
  width = 80,
  height = 80
}) => {
  return (
    <>
      <div className="avatar">
        <Image
          src="/lucas-inocente-2021.png"
          alt="Lucas Inocente"
          width={width}
          height={height}
          quality={100}
        />
      </div>
      <style jsx>{`
        .avatar {
          height: ${height}px;
          width: ${width}px;
          border-radius: 50%;
          border: 2px solid white;
          background: white;
          overflow: hidden;
          margin: 0 auto;
          transform: rotate(0deg);
          transition: 1s;
        }

        .avatar:hover {
          transform: rotate(-720deg);
        }
      `}</style>
    </>
  )
}

export default Avatar