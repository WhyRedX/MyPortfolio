import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const skillsCard = [
  {
    skillLogo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100%"
        height="100%"
        viewBox="0 0 50 50"
        className="group-hover:fill-xwhite"
      >
        <path d="M9,7l3,34l14,4l14-4c1-11.33,2-22.67,3-34H9z M33.76,35l-7.77,2l-7.76-2l-0.39-5h3.86l0.18,2L26,32.62L30.17,32l0.41-5	H17.59l0.96-12H34l0.7,6H31l-0.23-2h-8.36l-0.32,4h12.66L33.76,35z"></path>
      </svg>
    ),
    skillName: "html5",
  },
  {
    skillLogo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100%"
        height="100%"
        viewBox="0 0 50 50"
        fillRule="evenodd"
        className="group-hover:fill-xwhite"
      >
        <path d="M 42 6 L 39 40 L 25 44 L 11 40 L 8 6 Z M 16.800781 28 L 20.800781 28 L 20.898438 30.5 L 25 31.898438 L 29.101563 30.5 L 29.398438 26 L 20.601563 26 L 20.398438 22 L 29.601563 22 L 29.898438 18 L 16.101563 18 L 15.800781 14 L 34.101563 14 L 33.601563 22 L 32.898438 33.5 L 25 36.101563 L 17.101563 33.5 Z"></path>
      </svg>
    ),
    skillName: "css3",
  },
  {
    skillLogo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100%"
        height="100%"
        viewBox="0 0 30 30"
        className="group-hover:fill-xwhite"
      >
        {" "}
        <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M15,20.38 c0,1.777-1.09,2.773-2.9,2.773c-1.788,0-2.927-1.045-2.927-2.735h1.937c0.005,0.627,0.379,1.023,0.957,1.023 c0.594,0,0.913-0.374,0.913-1.078v-5.365H15V20.38z M20.481,23.153c-2.009,0-3.273-0.946-3.307-2.476H19.1 c0.049,0.578,0.626,0.946,1.463,0.946c0.754,0,1.272-0.363,1.272-0.886c0-0.44-0.347-0.677-1.255-0.858l-1.045-0.209 c-1.453-0.275-2.201-1.067-2.201-2.316c0-1.552,1.244-2.57,3.158-2.57c1.86,0,3.147,1.007,3.18,2.476h-1.865 c-0.044-0.561-0.578-0.952-1.289-0.952c-0.709,0-1.176,0.336-1.176,0.864c0,0.435,0.352,0.688,1.188,0.853l1.022,0.198 c1.569,0.303,2.273,1.012,2.273,2.272C23.826,22.152,22.561,23.153,20.481,23.153z"></path>
      </svg>
    ),
    skillName: "javascript",
  },
  {
    skillLogo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100%"
        height="100%"
        viewBox="0 0 50 50"
        className="group-hover:fill-xwhite"
      >
        <path d="M 34.554688 3.984375 C 33.775003 3.9581582 32.958884 4.0940926 32.140625 4.359375 C 30.504109 4.889941 28.789203 5.9238848 27.029297 7.3554688 C 26.339589 7.9165071 25.643623 8.5578288 24.945312 9.2382812 C 24.262398 8.5751039 23.580733 7.9509974 22.90625 7.4023438 C 21.147758 5.9719089 19.4375 4.9375672 17.804688 4.4082031 C 16.171878 3.8788386 14.547223 3.8624356 13.212891 4.6328125 C 11.878558 5.4031893 11.080619 6.8173558 10.722656 8.4960938 C 10.364693 10.174832 10.404125 12.173992 10.763672 14.412109 C 10.888559 15.189511 11.066671 16.005078 11.269531 16.835938 C 10.507095 17.067004 9.7666767 17.309955 9.0800781 17.578125 C 7.0079817 18.387438 5.2934468 19.355663 4.0449219 20.507812 C 2.7963969 21.659962 1.9902344 23.058304 1.9902344 24.59375 C 1.9902344 26.129196 2.7963969 27.525585 4.0449219 28.677734 C 5.2934468 29.829884 7.0079817 30.800062 9.0800781 31.609375 C 9.8142516 31.896126 10.609118 32.154326 11.429688 32.398438 C 11.134531 33.501278 10.895394 34.571467 10.732422 35.585938 C 10.372587 37.825853 10.334588 39.825265 10.693359 41.507812 C 11.052134 43.19036 11.850478 44.612534 13.191406 45.386719 C 14.532336 46.160905 16.164264 46.141894 17.800781 45.611328 C 19.437297 45.080762 21.15025 44.048772 22.910156 42.617188 C 23.593512 42.061316 24.284757 41.427206 24.976562 40.753906 C 25.671996 41.431263 26.366006 42.068338 27.052734 42.626953 C 28.811227 44.057387 30.523438 45.089776 32.15625 45.619141 C 33.789061 46.148505 35.413715 46.164908 36.748047 45.394531 C 38.082379 44.624154 38.878366 43.209988 39.236328 41.53125 C 39.59429 39.852512 39.554857 37.855304 39.195312 35.617188 C 39.031899 34.599965 38.792614 33.526227 38.496094 32.419922 C 39.343769 32.169866 40.163744 31.904721 40.919922 31.609375 C 42.992018 30.800062 44.706553 29.829884 45.955078 28.677734 C 47.203603 27.525585 48.009766 26.129196 48.009766 24.59375 C 48.009766 23.058304 47.203603 21.659963 45.955078 20.507812 C 44.706553 19.355663 42.992018 18.387438 40.919922 17.578125 C 40.22347 17.306107 39.471688 17.059992 38.697266 16.826172 C 38.901775 15.990221 39.083345 15.168805 39.208984 14.386719 C 39.568819 12.146804 39.606825 10.145439 39.248047 8.4628906 C 38.889279 6.7803434 38.088976 5.3601244 36.748047 4.5859375 C 36.077582 4.1988452 35.334372 4.0105918 34.554688 3.984375 z M 34.462891 6.0195312 C 34.952154 6.03291 35.369535 6.1493386 35.726562 6.3554688 C 36.440618 6.7677287 36.968419 7.5700924 37.25 8.890625 C 37.531581 10.211156 37.521848 11.99533 37.189453 14.064453 C 37.075647 14.772878 36.910402 15.52369 36.722656 16.292969 C 34.677151 15.800695 32.435744 15.435401 30.046875 15.220703 C 28.847638 13.559329 27.615404 12.045781 26.373047 10.703125 C 27.030182 10.061662 27.683063 9.4617259 28.320312 8.9433594 C 29.946026 7.6209332 31.485126 6.7210962 32.769531 6.3046875 C 33.411734 6.0964824 33.973627 6.0061525 34.462891 6.0195312 z M 15.486328 6.0253906 C 15.978419 6.0116533 16.541491 6.1017415 17.185547 6.3105469 C 18.473657 6.7281576 20.015452 7.6275969 21.642578 8.9511719 C 22.267037 9.4591336 22.905298 10.047651 23.548828 10.673828 C 22.297283 12.027473 21.054862 13.55414 19.847656 15.230469 C 17.468889 15.449074 15.236606 15.81635 13.201172 16.310547 C 13.014826 15.545537 12.849558 14.798586 12.736328 14.09375 C 12.403642 12.02283 12.39534 10.238404 12.677734 8.9140625 C 12.960128 7.5897208 13.492238 6.7813032 14.212891 6.3652344 C 14.573216 6.1572002 14.994237 6.0391279 15.486328 6.0253906 z M 24.976562 12.142578 C 25.791172 13.029071 26.605956 13.99916 27.414062 15.042969 C 26.620033 15.009861 25.816288 14.990234 25 14.990234 C 24.167457 14.990234 23.34841 15.010498 22.539062 15.044922 C 23.347352 14.000306 24.16175 13.029737 24.976562 12.142578 z M 25 17.009766 C 26.359894 17.009766 27.685348 17.065647 28.974609 17.160156 C 29.86173 18.434311 30.728648 19.786055 31.554688 21.216797 C 32.280504 22.473948 32.937328 23.729163 33.535156 24.96875 C 32.931017 26.224782 32.263184 27.496972 31.527344 28.771484 C 30.879609 29.893393 30.20319 30.958949 29.515625 31.986328 C 28.059313 32.10805 26.550303 32.175781 25 32.175781 C 23.412375 32.175781 21.869462 32.104031 20.380859 31.976562 C 19.704742 30.963955 19.039735 29.91454 18.402344 28.810547 C 17.668186 27.538949 17.003577 26.269079 16.400391 25.015625 C 17.006106 23.755092 17.673701 22.47818 18.412109 21.199219 C 19.233818 19.775977 20.098207 18.432055 20.980469 17.164062 C 22.283609 17.067424 23.62445 17.009766 25 17.009766 z M 31.548828 17.410156 C 33.197299 17.615841 34.745083 17.901405 36.185547 18.244141 C 35.758129 19.645287 35.231654 21.108808 34.59375 22.619141 C 34.179567 21.820719 33.750599 21.019585 33.287109 20.216797 C 32.725422 19.243926 32.140408 18.316416 31.548828 17.410156 z M 18.34375 17.425781 C 17.764654 18.315097 17.194836 19.224578 16.644531 20.177734 C 16.175094 20.990823 15.737221 21.802736 15.318359 22.611328 C 14.68596 21.110075 14.162654 19.654877 13.738281 18.261719 C 15.168002 17.918363 16.706766 17.633813 18.34375 17.425781 z M 38.164062 18.775391 C 38.872944 18.989877 39.557566 19.21371 40.185547 19.458984 C 42.0957 20.205046 43.60665 21.088493 44.585938 21.992188 C 45.565224 22.895882 45.990234 23.757696 45.990234 24.59375 C 45.990234 25.429804 45.565225 26.291619 44.585938 27.195312 C 43.60665 28.099007 42.0957 28.982454 40.185547 29.728516 C 39.487698 30.001079 38.72096 30.248243 37.923828 30.482422 C 37.355199 28.723643 36.629408 26.888772 35.765625 25.015625 C 36.758785 22.865083 37.561088 20.768289 38.164062 18.775391 z M 11.802734 18.785156 C 12.398803 20.758169 13.190811 22.834118 14.169922 24.962891 C 13.30047 26.846955 12.571087 28.692254 12 30.460938 C 11.23096 30.232919 10.490212 29.992451 9.8144531 29.728516 C 7.9042995 28.982454 6.39335 28.099007 5.4140625 27.195312 C 4.434775 26.291618 4.0097656 25.429804 4.0097656 24.59375 C 4.0097656 23.757696 4.434775 22.895882 5.4140625 21.992188 C 6.39335 21.088493 7.9042995 20.205046 9.8144531 19.458984 C 10.432774 19.217483 11.105915 18.996837 11.802734 18.785156 z M 25 20 C 22.250421 20 20 22.250421 20 25 C 20 27.749579 22.250421 30 25 30 C 27.749579 30 30 27.749579 30 25 C 30 22.250421 27.749579 20 25 20 z M 15.341797 27.365234 C 15.762496 28.177853 16.200028 28.993283 16.671875 29.810547 C 17.041048 30.449973 17.418073 31.072393 17.800781 31.683594 C 16.457817 31.497372 15.181231 31.261605 13.982422 30.982422 C 14.363652 29.81481 14.819744 28.602796 15.341797 27.365234 z M 34.619141 27.365234 C 35.143284 28.605725 35.599609 29.819681 35.982422 30.990234 C 34.779808 31.269089 33.499292 31.504052 32.152344 31.689453 C 32.540071 31.070779 32.922982 30.44057 33.296875 29.792969 C 33.765252 28.981717 34.201083 28.171917 34.619141 27.365234 z M 13.40625 32.923828 C 15.216074 33.352568 17.177716 33.681912 19.257812 33.896484 C 20.64638 35.904859 22.092967 37.709497 23.548828 39.287109 C 22.897813 39.921859 22.252566 40.517583 21.621094 41.03125 C 19.99538 42.353677 18.454326 43.251559 17.169922 43.667969 C 15.885516 44.084378 14.926946 44.029446 14.212891 43.617188 C 13.498835 43.204927 12.972987 42.402563 12.691406 41.082031 C 12.409825 39.761499 12.417606 37.979279 12.75 35.910156 C 12.900793 34.971492 13.12615 33.966374 13.40625 32.923828 z M 36.560547 32.931641 C 36.842987 33.980548 37.069013 34.98935 37.220703 35.933594 C 37.553389 38.004513 37.56169 39.788939 37.279297 41.113281 C 36.996903 42.437623 36.468699 43.247993 35.748047 43.664062 C 35.027395 44.080132 34.059594 44.13441 32.771484 43.716797 C 31.483374 43.299186 29.941578 42.399747 28.314453 41.076172 C 27.678439 40.558811 27.028726 39.958258 26.373047 39.318359 C 27.838664 37.73459 29.295467 35.920758 30.693359 33.900391 C 32.778701 33.687251 34.745791 33.359875 36.560547 32.931641 z M 21.867188 34.101562 C 22.893951 34.157518 23.934244 34.195312 25 34.195312 C 26.030504 34.195312 27.037063 34.159787 28.03125 34.107422 C 27.014961 35.478593 25.979034 36.725149 24.947266 37.847656 C 23.916125 36.722751 22.882144 35.473968 21.867188 34.101562 z"></path>
      </svg>
    ),
    skillName: "react js",
  },
  {
    skillLogo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100%"
        height="100%"
        viewBox="0 0 48 48"
        className="group-hover:fill-xwhite"
      >
        <path d="M18.974,31.5c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-14c0-0.653,0.423-1.231,1.045-1.43 c0.625-0.198,1.302,0.03,1.679,0.563l16.777,23.704C40.617,36.709,44,30.735,44,24c0-11-9-20-20-20S4,13,4,24s9,20,20,20 c3.192,0,6.206-0.777,8.89-2.122L18.974,22.216V31.5z M28.974,16.5c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5v13.84l-3-4.227 V16.5z"></path>
      </svg>
    ),
    skillName: "next js",
  },
  {
    skillLogo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        width="100%"
        height="100%"
        viewBox="0 0 32 32"
        className="group-hover:fill-xwhite"
      >
        <path d="M21.3 6a.3.3 0 00-.3.3v5.497l-1.246-.727a.499.499 0 00-.508 0l-2.994 1.746a.504.504 0 00-.252.436v3.496c0 .18.096.346.252.436l2.994 1.746a.499.499 0 00.508 0l2.994-1.746a.504.504 0 00.252-.436V7.23a.501.501 0 00-.248-.431l-1.303-.758A.295.295 0 0021.301 6zm-9.8 5.002a.506.506 0 00-.254.068l-2.994 1.746a.504.504 0 00-.252.436v3.496c0 .18.096.346.252.436l2.994 1.746c.157.09.35.09.508 0l2.994-1.746a.504.504 0 00.252-.436v-3.496a.502.502 0 00-.252-.436l-2.994-1.746a.506.506 0 00-.254-.068zm16 0a.499.499 0 00-.254.068l-2.994 1.746a.504.504 0 00-.252.436v3.496c0 .18.096.346.252.436l2.904 1.755a.498.498 0 00.51.004l1.428-.83a.224.224 0 000-.386L26 15.904V14.11l1.5-.873 1.5.873v1.25c0 .167.14.193.234.137a544.12 544.12 0 011.518-.883.5.5 0 00.248-.431v-.93a.502.502 0 00-.252-.436l-2.994-1.746a.502.502 0 00-.254-.068zm-24 .002a.499.499 0 00-.254.068L.252 12.816a.507.507 0 00-.252.438v4.463c0 .218.236.353.424.244l1.328-.773A.501.501 0 002 16.756v-2.643l1.5-.875 1.5.875v2.643c0 .178.095.341.248.431l1.328.774A.282.282 0 007 17.717v-4.463a.507.507 0 00-.252-.438l-2.994-1.744a.499.499 0 00-.254-.068zm16 2.232l1.5.875v1.778l-1.5.875-1.5-.875V14.11l1.5-.875zm8 .768l-.857.5v.998L27.5 16l.857-.498v-.998l-.857-.5zm-12.094 3.994a.605.605 0 00-.297.076L12.297 19.7a.586.586 0 00-.297.512v3.246c0 .209.117.406.297.512l.74.422c.355.175.486.175.647.175.53 0 .832-.317.832-.877v-3.207a.082.082 0 00-.082-.084h-.356a.084.084 0 00-.084.084v3.207c0 .243-.257.493-.676.284l-.77-.444a.09.09 0 01-.042-.074V20.21c0-.029.014-.063.043-.078l2.812-1.621a.091.091 0 01.088 0l2.815 1.62c.029.016.043.045.043.079v3.246a.093.093 0 01-.043.078l-2.815 1.627a.091.091 0 01-.088 0l-.718-.428c-.02-.01-.05-.015-.069-.005a1.684 1.684 0 01-.424.195c-.049.015-.115.045.026.123l.933.555a.642.642 0 00.297.078.545.545 0 00.293-.082l2.813-1.627a.586.586 0 00.297-.512v-3.246a.603.603 0 00-.297-.512l-2.813-1.625a.584.584 0 00-.293-.076zm4.387 1.498a.54.54 0 10.002 1.08.54.54 0 00-.002-1.08zm-.006.086c.254 0 .46.2.46.453a.467.467 0 01-.46.46.456.456 0 01-.451-.46c0-.253.203-.453.451-.453zm-.197.147v.607h.115v-.242h.108c.044 0 .054.018.064.052 0 .005.018.163.023.192h.125a.715.715 0 01-.029-.162c-.014-.078-.018-.132-.101-.137.044-.015.117-.038.117-.15 0-.161-.14-.16-.213-.16h-.21zm.115.097h.098c.03 0 .088 0 .088.082 0 .034-.015.09-.094.088h-.092v-.17zm-3.545.496c-.803 0-1.28.343-1.28.907 0 .618.478.783 1.247.86.92.093.992.225.992.405 0 .316-.254.447-.848.447-.745 0-.908-.184-.962-.554-.005-.04-.04-.069-.084-.069h-.366a.082.082 0 00-.082.084c0 .472.258 1.037 1.489 1.037.903 0 1.414-.35 1.414-.964 0-.608-.41-.77-1.276-.887-.876-.117-.963-.176-.963-.381 0-.17.072-.393.72-.393.578 0 .794.127.882.516.01.04.037.063.076.063h.365c.024 0 .045-.01.059-.024.015-.019.024-.038.02-.062-.058-.672-.502-.985-1.403-.985z"></path>
      </svg>
    ),
    skillName: "node js",
  },
  {
    skillLogo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100%"
        height="100%"
        viewBox="0 0 30 30"
        className="group-hover:fill-xwhite"
      >
        <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
      </svg>
    ),
    skillName: "github",
  },
];

const projectsCard = [
  {
    projectName: "calisthenxs",
    language: "html5, css3, javascript, reactjs, nodejs",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste saepe rerum minus voluptate. Velit nulla nisi harum, rerum in ipsum?",
    sourceLink: "adasdasd",
  },
  {
    projectName: "book-kart",
    language: "html5, css3, javascript, reactjs, nodejs",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste saepe rerum minus voluptate. Velit nulla nisi harum, rerum in ipsum?",
    sourceLink: "adasdasd",
  },
  {
    projectName: "dummy name",
    language: "html5, css3, javascript, reactjs, nodejs",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste saepe rerum minus voluptate. Velit nulla nisi harum, rerum in ipsum?",
    sourceLink: "adasdasd",
  },
  {
    projectName: "dummy name",
    language: "html5, css3, javascript, reactjs, nodejs",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste saepe rerum minus voluptate. Velit nulla nisi harum, rerum in ipsum?",
    sourceLink: "adasdasd",
  },
];

function squareBlock({ skillLogo, skillName }) {
  return (
    <div className="group">
      <div className="md:w-full md:h-auto p-4 md:p-7 flex flex-col justify-between shadow-md hover:scale-110 transition group group-hover:bg-xdark">
        <div>{skillLogo}</div>
        <span className="text-center text-sm lg:text-lg group-hover:text-xwhite">
          {skillName}
        </span>
      </div>
    </div>
  );
}

function rectangleBlock({ projectName, language, description, sourceLink }) {
  return (
    <div className="group">
      <div className="md:w-full md:h-auto p-7 shadow-md hover:scale-110 group-hover:bg-xdark transition">
      <h1 className="font-bold text-2xl mb-1 group-hover:text-xwhite">{projectName}</h1>
      <span className="text-xsmall group-hover:text-xwhite">
        [ <em>{language}</em> ]
      </span>
      <p className="text-xsmall my-5 group-hover:text-xwhite">{description}</p>
      <Link href={sourceLink}>
        <a className="text-xsmall flex items-center">
          <span className="mr-2 group-hover:text-xwhite">source code</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 509 511.54"
            width="12"
            height="12"
            className="group-hover:fill-xwhite"
          >
            <path d="M447.19 347.03c0-17.06 13.85-30.91 30.91-30.91 17.05 0 30.9 13.85 30.9 30.91v87.82c0 21.08-8.63 40.29-22.51 54.18-13.88 13.88-33.09 22.51-54.18 22.51H76.69c-21.09 0-40.3-8.63-54.18-22.51C8.63 475.14 0 455.93 0 434.85V76.69c0-21.09 8.63-40.3 22.51-54.18C36.39 8.63 55.6 0 76.69 0h86.98c17.06 0 30.9 13.85 30.9 30.9 0 17.06-13.84 30.91-30.9 30.91H76.69c-4.07 0-7.82 1.69-10.51 4.37-2.68 2.69-4.37 6.44-4.37 10.51v358.16c0 4.06 1.69 7.82 4.37 10.5 2.69 2.68 6.44 4.38 10.51 4.38h355.62c4.07 0 7.82-1.7 10.51-4.38 2.68-2.68 4.37-6.44 4.37-10.5v-87.82zm0-243.56L308.15 244.28c-11.91 12.12-31.45 12.28-43.56.37-12.11-11.91-12.28-31.45-.37-43.56L401.77 61.81H309.7c-17.06 0-30.9-13.85-30.9-30.91 0-17.05 13.84-30.9 30.9-30.9h168.4C495.15 0 509 13.85 509 30.9v165.04c0 17.06-13.85 30.9-30.9 30.9-17.06 0-30.91-13.84-30.91-30.9v-92.47z"></path>
          </svg>
        </a>
      </Link>
    </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Bhupendra Thapa</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Bhupendra Thapa" />
        <meta property="og:site_name" content="Bhupendra Thapa" />
        <link rel="canonical" href="/" />
        <meta property="og:url" content="/" />
      </Head>

      <main className="flex relative font-poppins flex-col md:flex-row">
        {/* left part of home */}
        <div className="p-5 lg:py-14 lg:pb-5 md:fixed lg:px-20 flex flex-col justify-between w-full md:h-screen md:max-w-[50%]">
          <div>
            <h1 className="text-[12vw] md:text-[6vw] font-bold break-words mb-7 leading-tight">
              bhupendra thapa
            </h1>
            <p className="mb-12 break-words text-sm md:text-xsmall text-xgrey">
              I am a MERN stack developer with specialization in developing
              frontend web applications. I have experience in React JS. Along
              with that I am working on Next JS.
            </p>
            <ul className="text-xgrey mb-12 md:mb-0">
              <li>
                <Link href="/#skills">
                  <a className="inline-flex items-center group">
                    <div className="hoverExpand xtransition"></div>
                    <span className="text-sm md:text-xsmall group-hover:text-xdark">
                      skills & tools
                    </span>
                  </a>
                </Link>
              </li>
              <li className="my-5">
                <Link href="/#projects">
                  <a className="inline-flex items-center group">
                    <div className="hoverExpand xtransition"></div>
                    <span className="text-sm md:text-xsmall group-hover:text-xdark">
                      projects
                    </span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#contact">
                  <a className="inline-flex items-center group">
                    <div className="hoverExpand xtransition"></div>
                    <span className="text-sm md:text-xsmall group-hover:text-xdark">
                      contact Me
                    </span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap items-center">
            <div className="mb-5 mr-7">
              <Image
                className="rounded-full"
                src="/images/author.jpg"
                width={50}
                height={50}
              />
            </div>
            <ul className="flex flex-wrap">
              <li className="mr-7 mb-4">
                <Link href="https://github.com/WhyRedX">
                  <a className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="23"
                      height="23"
                      viewBox="0 0 30 30"
                    >
                      <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                    </svg>
                    <span className="text-sm md:text-xsmall ml-1">github</span>
                  </a>
                </Link>
              </li>
              <li className="mr-7 mb-4">
                <Link href="https://www.linkedin.com/in/whyredx">
                  <a className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="23"
                      height="23"
                      viewBox="0 0 30 30"
                    >
                      <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M10.496,8.403 c0.842,0,1.403,0.561,1.403,1.309c0,0.748-0.561,1.309-1.496,1.309C9.561,11.022,9,10.46,9,9.712C9,8.964,9.561,8.403,10.496,8.403z M12,20H9v-8h3V20z M22,20h-2.824v-4.372c0-1.209-0.753-1.488-1.035-1.488s-1.224,0.186-1.224,1.488c0,0.186,0,4.372,0,4.372H14v-8 h2.918v1.116C17.294,12.465,18.047,12,19.459,12C20.871,12,22,13.116,22,15.628V20z"></path>
                    </svg>
                    <span className="text-sm md:text-xsmall ml-1">
                      linkedin
                    </span>
                  </a>
                </Link>
              </li>
              <li className="mr-7 mb-4">
                <Link href="https://telegram.me/whyredx">
                  <a className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="20"
                      height="20"
                      viewBox="0 0 50 50"
                    >
                      <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"></path>
                    </svg>
                    <span className="text-sm md:text-xsmall ml-1">
                      telegram
                    </span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* right part of home */}
        <div className="w-full md:max-w-[50%] p-5 lg:pt-0 lg:pb-14 lg:pr-20 md:absolute md:top-0 md:right-0 md:z-50">
          <div id="skills" className="skills lg:pt-14">
            <h1 className="md:hidden font-bold text-xl mb-4">skills</h1>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 gap-2">
              {skillsCard.map(squareBlock)}
            </div>
          </div>
          <div id="projects" className="projects py-[5rem]">
            <h1 className="md:hidden font-bold text-xl mb-4">projects</h1>
            <div className="grid grid-cols-1 gap-2">
              {projectsCard.map(rectangleBlock)}
            </div>
          </div>
          <div id="contact" className="contact">
            <h1 className="md:hidden font-bold text-xl mb-4">get in touch</h1>
            <form>
              <div>
              <input className="w-full focus:outline-none text-sm bg-gray-100 p-3" type="text" placeholder="name" required/>
              </div>
              <div className="my-6">
                <input className="w-full focus:outline-none text-sm bg-gray-100 p-3" type="email" placeholder="email" required/>
              </div>
              <div  className="mb-7">
                <textarea className="w-full min-h-[10rem] focus:outline-none text-sm bg-gray-100 p-3" placeholder="message"></textarea>
              </div>
              <div>
                <input className="bg-xdark text-sm text-xwhite py-3 px-5" type="submit" value="send message" />
              </div>
            </form>
          </div>
          <div className="mt-14 text-center md:text-start md:p-7">
            <p className="text-xsmall">
              design by <span className="text-xgrey">bhupendra thapa</span> |
              next.js
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
