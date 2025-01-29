const Footer = () => {
  return (
    <div className="bg-white px-32 py-9 flex justify-between flex-wrap items-center">
      <div>
        <p className="font-normal text-xl mb-3">Daraz International</p>
        <div className="flex gap-2 text-gray-500 font-normal">
          <div className="flex gap-2 m-2">
            <img
              src="/public/image/Nepal flg.png"
              alt="Nepal"
              className="h-7"
            />
            Nepal
          </div>
          <div className="flex gap-2 m-2">
            <img
              src="/public/image/Bangladesh flg.png"
              alt="Bangladesh"
              className="h-7"
            />
            Pakistan
          </div>
          <div className="flex gap-2 m-2">
            <img
              src="/public/image/Srilanka flg.png"
              alt="Srilanka"
              className="h-7"
            />{" "}
            SriLanka
          </div>
          <div className="flex gap-2 m-2">
            <img
              src="/public/image/Myanmar flg.png"
              alt="Myanmar"
              className="h-7"
            />
            Myanmar
          </div>
        </div>
      </div>
      <div>
        <p className="font-normal text-xl mb-3">Follow Us</p>
        <div className="flex h-7 gap-5">
          <img src="/public/image/youtube.png" alt="" />
          <img src="/public/image/facebook.png" alt="" />
          <img src="/public/image/instagram.png" alt="" />
        </div>
      </div>
      <div>Copyright Daraz 2025</div>
    </div>
  );
};

export default Footer;
