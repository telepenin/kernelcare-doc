(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{213:function(e,t,r){"use strict";r.r(t);var s=r(1),a=Object(s.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._v(" "),r("p",[e._v("The script marks vulnerabilities detected by Nexpose, but patched by KernelCare as exceptions.")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),r("p",[e._v("To install kcare-nexpose, start with the minimal image of EL6:")]),e._v(" "),e._m(3),r("p",[e._v("To install kcare-nexpose run the command:")]),e._v(" "),e._m(4),r("p"),e._v(" "),e._m(5),e._v(" "),r("p"),e._v(" "),e._m(6),e._m(7),e._v(" "),e._m(8),e._v(" "),r("p",[e._v("First, you should generate report in Nexpose (see supported report types below) and specify it in the config file. Also you need to specify some other "),r("router-link",{attrs:{to:"/kcare-nexpose#yaml-config-file-description/"}},[e._v("parameters")]),e._v(" :")],1),e._v(" "),e._m(9),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),r("p",[e._v("To launch kcare-nexpose run:")]),e._v(" "),e._m(15),e._m(16),e._v(" "),e._m(17)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"kcare-nexpose"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kcare-nexpose","aria-hidden":"true"}},[this._v("#")]),this._v(" Kcare-nexpose")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[this._v("#")]),this._v(" Installation")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"from-yum-repository"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#from-yum-repository","aria-hidden":"true"}},[this._v("#")]),this._v(" From yum repository")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("$ cat > /etc/yum.repos.d/kcare-eportal.repo <<EOL\n[kcare-eportal]\nname=kcare-eportal\nbaseurl=http://repo.eportal.kernelcare.com/x86_64/\ngpgkey=http://repo.cloudlinux.com/kernelcare-debian/6/conf/kcaredsa_pub.gpg\nenabled=1\ngpgcheck=1\nEOL\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("$ yum install kcare-nexpose\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"from-github"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#from-github","aria-hidden":"true"}},[this._v("#")]),this._v(" From github")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("$ git clone https://github.com/cloudlinux/kcare-nexpose.git\n$ cd kcare-nexpose/\n$ python setup.py install\n$ pip install -r REQUIREMENTS\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"how-it-works"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-it-works","aria-hidden":"true"}},[this._v("#")]),this._v(" How It Works")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("The script finds CVEs that are related to patches applied by KernelCare (downloaded either from KernelCare ePortal or the central KernelCare patch server) and excludes them from Nexpose vulnerability scanner reports. The script can approve this exception in Nexpose (if you do not want to approve, set "),r("code",[e._v("is_approve")]),e._v(" to "),r("code",[e._v("false")]),e._v(" in the script config). It can also remove the old exceptions left from the previous script runs (set "),r("code",[e._v("delete_old")]),e._v(" to "),r("code",[e._v("true")]),e._v(" in the script config).")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("$ cp /usr/local/etc/kcare-nexpose.yml.template /usr/local/etc/kcare-nexpose.yml\n$ vim /usr/local/etc/kcare-nexpose.yml\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("Note")]),this._v(" "),t("p",[this._v("IP address in Nexpose and the one in KernelCare ePortal should be the same. If you use Nexpose and KernelCare ePortal on different instances, you should make sure that Nexpose and KernelCare ePortal are not using localhost (127.0.0.1). Otherwise, kcare-nexpose can mark vulnerability wrong, as it just analyzes IP addresses from Nexpose and KernelCare ePortal.\n"),t("em",[this._v("If used with CLN license server, the script can work with servers behind NAT by matching them by their hostnames.")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"supported-report-types"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#supported-report-types","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported report types")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("em",[this._v("raw-xml-v2")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"https://docs.kernelcare.com/nexpose-xml2_zoom70.png",alt:""}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"how-to-launch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-launch","aria-hidden":"true"}},[this._v("#")]),this._v(" How To Launch")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("$ kcare-nexpose -c /usr/local/etc/kcare-nexpose.yml\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"yaml-config-file-description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yaml-config-file-description","aria-hidden":"true"}},[this._v("#")]),this._v(" YAML config file description")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('# Nexpose section\n\nnexpose:\n # Host to connect with Nexpose Security Console\n\n  host: 192.168.100.100\n\n  # Port to connect with Nexpose Security Console\n  port: 3780\n\n  # Username to auth with Nexpose Security Console\n  username: admin\n\n  # Password to auth with Nexpose Security Console\n  password: hup^r37kZc72MjY}=ox?WTQ\n\n  # Report name which will be analyzed for look up related CVE with kernelcare ePortal\n  report-name: kernelcare\n\n  # Change this to \'true\' if you want the script to automatically mark \n  # vulnerabilities as exceptions, so they don\'t show up in the report\n  is_approve: true\n\n  # If you want to delete old exceptions. If it is false, old exceptions will not be deleted\n  delete_old: true\n\n  format: raw-xml-v2\n\n# License and patch server section\npatch-server:\n\n  # URL to connect to Kernelcare ePortal\n\n  # For kernelcare ePortal use "http://<kernel-care-eportal-domain-name-or-ip>/admin/api/kcare/patchset/"\n  # For licenses issued by CLN, use "https://cln.cloudlinux.com/api/kcare/patchset.json?key="\n  server: https://cln.cloudlinux.com/api/kcare/patchset.json?key=\n\n  # Server for patch sets\n  # For patch sets from Kernelcare ePortal server use domain name\n  # (or IP address)\n  # patches-info: http://<kernel-care-eportal-domain-name-or-ip>\n\n  # For patch sets from the central KernelCare patch server\n  patches-info: http://patches.kernelcare.com/\n\n  # List of KernelCare license keys\n  keys:\n    - 0G0996952sTtCU4z\n    - hx5LO1n49zY5jp6B\n')])])])}],!1,null,null,null);a.options.__file="README.md";t.default=a.exports}}]);