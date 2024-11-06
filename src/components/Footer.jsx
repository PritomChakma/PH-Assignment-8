const Footer = () => {
  return (
    <div className="mt-20 border-2 bg-base-100 md:w-11/12 mx-auto rounded-xl">
      <div className="mx-auto text-center py-5">
        <h1 className="text-2xl font-bold">Gadget Heaven</h1>
        <p className="text-gray">
          Leading the way in cutting-edge technology and innovation.
        </p>

        <div className="grid  grid-cols-3 mt-5 items-center py-5">
          <div className="grid grid-cols-1 space-y-2">
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
