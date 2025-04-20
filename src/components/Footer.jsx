import React from 'react';

const Footer = () => {
  const FacebookIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      className="w-6 h-6 text-gray-400 hover:text-white transition-colors"
    >
      <path
        fill="currentColor"
        d="M279.14 288l14.22-92.66h-88.91v-62.8c0-25.35 12.42-50.06 52.24-50.06h40.42v-70.06c-6.86-.499-26.13-2.5-48.33-2.5-43.15 0-72.91 26.57-72.91 79.47v33.75H85.57v92.66h62.17v157.29c0 8.69 6.31 15.85 14.22 15.85h49.37c7.91 0 14.22-7.16 14.22-15.85v-157.29h57.3d0 0Z"
      />
    </svg>
  );

  const TwitterIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="w-6 h-6 text-gray-400 hover:text-white transition-colors"
    >
      <path
        fill="currentColor"
        d="M459.37 151.716c.325 4.546.325 9.092.325 13.638 0 43.691-33.34 79.037-74.889 79.037-14.723 0-28.47-4.282-39.96-11.963 2.221.16 4.436.248 6.657.248 13.07 0 25.12-4.482 34.62-12.192-13.481-.256-24.757-8.605-28.811-20.562 4.415.855 8.618 1.321 13.02 1.321 7.485 0 14.359-2.445 19.946-6.557-15.405-3.174-26.624-17.288-26.624-32.236 0-7.107 2.413-12.78 6.47-17.07-10.804-.216-20.747-5.788-27.027-13.766 6.64 8.23 16.601 12.956 27.951 13.419-4.995-20.323 9.078-37.881 29.194-37.881 35.28 0 65.571 21.85 65.571 50.391 0 3.861-.052 7.711-.156 11.537 0 11.095-8.493 20.002-19.617 20.002-3.905 0-7.799-.225-11.573-.647 7.775 4.899 16.072 7.688 24.992 7.688 29.985 0 56.947-29.674 56.947-69.965 0-1.082-.024-2.162-.071-3.243 0-32.152-24.914-58.082-56.64-58.082-40.083 0-75.988 32.352-75.988 72.617 0 8.041.821 15.808 2.354 23.271-23.827-4.835-44.742-25.176-44.742-52.232 0-11.64 3.08-22.727 8.24-31.307 26.686 29.381 40.738 49.151 77.031 49.151 9.428 0 17.992-1.45 25.59-4.062-11.801 7.234-24.384 11.51-37.897 11.51-7.234 0-14.469-2.083-20.442-5.875a24.791 24.791 0 0 1-10.206-17.213c4.871 1.465 10.161 2.276 15.678 2.276 19.17 0 32.45-12.951 35.891-30.314z"
      />
    </svg>
  );

  const InstagramIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className="w-6 h-6 text-gray-400 hover:text-white transition-colors"
    >
      <path
        fill="currentColor"
        d="M224 202.5c-34.467 0-62.356 27.889-62.356 62.356s27.889 62.356 62.356 62.356 62.356-27.889 62.356-62.356-27.889-62.356-62.356-62.356zm182.5 21.1c-1.471 17.636-10.427 33.626-28.063 41.456-16.751 7.365-38.324 10.514-62.107 10.514-23.783 0-45.356-3.149-62.107-10.514-17.636-7.83-26.592-23.82-28.063-41.456-1.153-14.496-1.153-29.461 0-43.945l.135-1.688c.753-9.365 4.083-16.89 9.943-22.227 5.86-5.337 13.385-8.667 21.818-8.667h62.985c8.433 0 15.957 3.33 21.817 8.667 5.86 5.337 9.19 12.862 9.943 22.227l.134 1.688c1.153 14.484 1.153 29.449 0 43.945zm-87.2-27.135c-16.664 0-30.045-13.381-30.045-30.045 0-16.664 13.381-30.045 30.045-30.045 16.664 0 30.045 13.381 30.045 30.045 0 16.664-13.381 30.045-30.045 30.045zM447.971 201.8c.318 31.78-22.257 59.3-53.693 60.4-16.577.574-31.657-4.515-43.346-12.191-8.032-5.335-13.841-13.152-16.634-22.354-.305-1.028-.61-2.056-.916-3.083v-1.363c-.595-17.765-5.273-34.167-13.715-48.482-8.302-13.835-19.167-24.885-32.224-32.327-19.348-10.776-41.163-16.427-63.692-16.469-42.363-.072-78.38 27.274-88.131 64.515-9.541 36.556-4.224 75.345 13.115 103.83 7.711 13.317 19.844 24.124 34.32 31.051 11.218 5.378 23.912 8.137 37.157 8.137 12.324 0 24.23-2.31 35.081-6.425 15.72-5.956 27.923-16.152 33.99-29.336 1.777-4.084 3.075-8.625 3.805-13.533.065-4.115.1-8.23-.001-12.345.001-28.084 21.574-50.819 49.66-50.819 26.797.001 48.513 20.177 52.854 46.836z"
      />
    </svg>
  );

  const LinkedInIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className="w-6 h-6 text-gray-400 hover:text-white transition-colors"
    >
      <path
        fill="currentColor"
        d="M416 32H32C14.319 32 0 46.319 0 64v384c0 17.681 14.319 32 32 32h384c17.681 0 32-14.319 32-32V64c0-17.681-14.319-32-32-32zM149.893 425.743H100.185V205.053h49.708v220.69zM124.939 171.413c-14.021 0-25.35-11.329-25.35-25.35 0-14.02 11.329-25.35 25.35-25.35s25.35 11.33 25.35 25.35c0 14.021-11.329 25.35-25.35 25.35zM347.05 425.743h-49.708V301.636c0-26.927-10.753-47.246-34.187-47.246-18.563 0-29.156 12.315-33.953 24.175-2.185 5.127-2.741 12.236-2.741 19.392v147.886h-49.708V205.053h49.708v69.185c6.861-10.771 19.364-17.584 32.416-17.584 35.282 0 62.022 22.77 62.022 72.336v116.753z"
      />
    </svg>
  );

  const NewsletterInput = () => (
    <div className="flex">
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 rounded-l-md border-gray-700 bg-gray-800 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <button className="bg-orange-500 text-white rounded-r-md px-6 py-2 transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50">
        Subscribe
      </button>
    </div>
  );

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* BITSAT Questor Section */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-white mb-4">BITSAT Questor</h3>
            <p className="text-sm">
              Empowering students to ace their BITSAT examination through comprehensive
              practice and guidance.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="text-sm">
              <li className="mb-2 hover:text-white transition-colors">
                <a href="#">About Us</a>
              </li>
              <li className="mb-2 hover:text-white transition-colors">
                <a href="#">Practice Questions</a>
              </li>
              <li className="mb-2 hover:text-white transition-colors">
                <a href="#">Mock Tests</a>
              </li>
              <li className="hover:text-white transition-colors">
                <a href="#">Pricing</a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="text-sm">
              <li className="mb-2 hover:text-white transition-colors">
                <a href="#">FAQ</a>
              </li>
              <li className="mb-2 hover:text-white transition-colors">
                <a href="#">Contact Us</a>
              </li>
              <li className="mb-2 hover:text-white transition-colors">
                <a href="#">Terms of Service</a>
              </li>
              <li className="hover:text-white transition-colors">
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Connect With Us Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="#" aria-label="Twitter">
                <TwitterIcon />
              </a>
              <a href="#" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="#" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
            </div>
            <div className="mb-4">
              <h4 className="text-md font-semibold text-white mb-2">Newsletter</h4>
              <NewsletterInput />
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          &copy; 2025 BITSAT Questor. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
