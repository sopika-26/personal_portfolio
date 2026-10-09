
import ResumeImg from '../assets/resume.jpg';

export default function Resume() {
  return (
    <section
      className="flex flex-col md:flex-row bg-secondary px-5"
      id="Resume"
    >
      <div className="py-5 md:w-1/2 flex justify-center md:justify-end">
        <img
          className="w-[300px]"
          src={ResumeImg}
          alt="Resume preview"
        />
      </div>

      <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl text-white mb-5 w-[140px] border-b-2 border-primary font-bold">
            Resume
          </h1>

          <p className="text-white pb-5">
            You can download and view my resume through here{' '}
            <a
              className="btn"
              href="/Sopika_M_Resume.pdf"
              download="Sopika_Resume.pdf"
            >
              Download
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
