// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define([],function(){function y(a,b,c){c=c||2;w=a.length/c+(b?2*b.length:0);z=!1;var d=b&&b.length,e=d?b[0]*c:a.length,l=I(a,0,e,c,!0),k=[];if(!l)return k;var m,g,t,h;if(d)a:{var f=c,d=[],p,n,u;h=0;for(p=b.length;h<p;h++)n=b[h]*f,u=h<p-1?b[h+1]*f:a.length,n=I(a,n,u,f,!1),n===n.next&&(n.steiner=!0),d.push(M(n));d.sort(N);for(h=0;h<d.length;h++){if(!l){l=null;break a}b=d[h];f=l;if(f=O(b,f))b=J(f,b),A(b,b.next);l=A(l,l.next)}}if(z)return k;if(a.length>80*c){m=t=a[0];g=d=a[1];for(f=c;f<e;f+=c)h=a[f],
b=a[f+1],h<m&&(m=h),b<g&&(g=b),h>t&&(t=h),b>d&&(d=b);t=Math.max(t-m,d-g)}B(l,k,c,m,g,t);return k}function I(a,b,c,d,e){var l;if(e===0<C(a,b,c,d))for(e=b;e<c;e+=d)l=K(e,a[e],a[e+1],l);else for(e=c-d;e>=b;e-=d)l=K(e,a[e],a[e+1],l);l&&x(l,l.next)&&(D(l),l=l.next);return l}function A(a,b){if(!a)return a;b||(b=a);var c,d=0,e=w*w/2;do{c=!1;if(a.steiner||!x(a,a.next)&&0!==u(a.prev,a,a.next))a=a.next;else{D(a);a=b=a.prev;if(a===a.next)return null;c=!0}if(d++>e)return z=!0,null}while(c||a!==b);return b}function B(a,
b,c,d,e,l,k){if(a){if(!k&&l){var m=a,g=m;do null===g.z&&(g.z=G(g.x,g.y,d,e,l)),g.prevZ=g.prev,g=g.nextZ=g.next;while(g!==m);g.prevZ.nextZ=null;g.prevZ=null;var m=g,t,h,f,p,n,v,r=1;do{g=m;f=m=null;for(p=0;g;){p++;h=g;for(t=n=0;t<r&&(n++,h=h.nextZ,h);t++);for(v=r;0<n||0<v&&h;)0===n?(t=h,h=h.nextZ,v--):0!==v&&h?g.z<=h.z?(t=g,g=g.nextZ,n--):(t=h,h=h.nextZ,v--):(t=g,g=g.nextZ,n--),f?f.nextZ=t:m=t,t.prevZ=f,f=t;g=h}f.nextZ=null;r*=2}while(1<p)}for(m=a;a.prev!==a.next;){g=a.prev;h=a.next;if(l)a:{f=a;v=d;
var q=e,w=l;p=f.prev;n=f;r=f.next;if(0<=u(p,n,r))f=!1;else{var y=p.x>n.x?p.x>r.x?p.x:r.x:n.x>r.x?n.x:r.x,C=p.y>n.y?p.y>r.y?p.y:r.y:n.y>r.y?n.y:r.y;t=G(p.x<n.x?p.x<r.x?p.x:r.x:n.x<r.x?n.x:r.x,p.y<n.y?p.y<r.y?p.y:r.y:n.y<r.y?n.y:r.y,v,q,w);v=G(y,C,v,q,w);for(q=f.nextZ;q&&q.z<=v;){if(q!==f.prev&&q!==f.next&&F(p.x,p.y,n.x,n.y,r.x,r.y,q.x,q.y)&&0<=u(q.prev,q,q.next)){f=!1;break a}q=q.nextZ}for(q=f.prevZ;q&&q.z>=t;){if(q!==f.prev&&q!==f.next&&F(p.x,p.y,n.x,n.y,r.x,r.y,q.x,q.y)&&0<=u(q.prev,q,q.next)){f=
!1;break a}q=q.prevZ}f=!0}}else f=P(a);if(f)b.push(g.i/c),b.push(a.i/c),b.push(h.i/c),D(a),m=a=h.next;else{if(z)break;a=h;if(a===m){if(!k)B(A(a),b,c,d,e,l,1);else if(1===k){k=b;m=c;g=a;do h=g.prev,f=g.next.next,!x(h,f)&&L(h,g,g.next,f)&&E(h,f)&&E(f,h)&&(k.push(h.i/m),k.push(g.i/m),k.push(f.i/m),D(g),D(g.next),g=a=f),g=g.next;while(g!==a);a=g;B(a,b,c,d,e,l,2)}else if(2===k)a:{k=a;do{for(m=k.next.next;m!==k.prev;){if(g=k.i!==m.i){g=k;h=m;f=void 0;if(f=g.next.i!==h.i&&g.prev.i!==h.i){f=void 0;b:{f=g;
do{if(f.i!==g.i&&f.next.i!==g.i&&f.i!==h.i&&f.next.i!==h.i&&L(f,f.next,g,h)){f=!0;break b}f=f.next}while(f!==g);f=!1}f=!f}p=void 0;if(p=f&&E(g,h)&&E(h,g)){f=g;p=!1;n=(g.x+h.x)/2;h=(g.y+h.y)/2;do f.y>h!==f.next.y>h&&n<(f.next.x-f.x)*(h-f.y)/(f.next.y-f.y)+f.x&&(p=!p),f=f.next;while(f!==g)}g=p}if(g){a=J(k,m);k=A(k,k.next);a=A(a,a.next);B(k,b,c,d,e,l);B(a,b,c,d,e,l);break a}m=m.next}k=k.next}while(k!==a)}break}}}}}function P(a){var b=a.prev,c=a.next;if(0<=u(b,a,c))return!1;for(var d=a.next.next,e=0;d!==
a.prev;){if(F(b.x,b.y,a.x,a.y,c.x,c.y,d.x,d.y)&&0<=u(d.prev,d,d.next))return!1;d=d.next;if(e++>w)return z=!0,!1}return!0}function N(a,b){return a.x-b.x}function O(a,b){var c=b,d=a.x,e=a.y,l=-Infinity,k;do{if(!c)return null;if(e<=c.y&&e>=c.next.y){var m=c.x+(e-c.y)*(c.next.x-c.x)/(c.next.y-c.y);if(m<=d&&m>l){l=m;if(m===d){if(e===c.y)return c;if(e===c.next.y)return c.next}k=c.x<c.next.x?c:c.next}}c=c.next}while(c!==b);if(!k)return null;if(d===l)return k.prev;b=k;for(var m=k.x,g=k.y,t=Infinity,h,c=k.next;c!==
b;)d>=c.x&&c.x>=m&&F(e<g?d:l,e,m,g,e<g?l:d,e,c.x,c.y)&&(h=Math.abs(e-c.y)/(d-c.x),(h<t||h===t&&c.x>k.x)&&E(c,a)&&(k=c,t=h)),c=c.next;return k}function G(a,b,c,d,e){a=32767*(a-c)/e;b=32767*(b-d)/e;a=(a|a<<8)&16711935;a=(a|a<<4)&252645135;a=(a|a<<2)&858993459;b=(b|b<<8)&16711935;b=(b|b<<4)&252645135;b=(b|b<<2)&858993459;return(a|a<<1)&1431655765|((b|b<<1)&1431655765)<<1}function M(a){var b=a,c=a;do b.x<c.x&&(c=b),b=b.next;while(b!==a);return c}function F(a,b,c,d,e,l,k,m){return 0<=(e-k)*(b-m)-(a-k)*
(l-m)&&0<=(a-k)*(d-m)-(c-k)*(b-m)&&0<=(c-k)*(l-m)-(e-k)*(d-m)}function u(a,b,c){return(b.y-a.y)*(c.x-b.x)-(b.x-a.x)*(c.y-b.y)}function x(a,b){return a.x===b.x&&a.y===b.y}function L(a,b,c,d){return x(a,b)&&x(c,d)||x(a,d)&&x(c,b)?!0:0<u(a,b,c)!==0<u(a,b,d)&&0<u(c,d,a)!==0<u(c,d,b)}function E(a,b){return 0>u(a.prev,a,a.next)?0<=u(a,b,a.next)&&0<=u(a,a.prev,b):0>u(a,b,a.prev)||0>u(a,a.next,b)}function J(a,b){var c=new H(a.i,a.x,a.y),d=new H(b.i,b.x,b.y),e=a.next,l=b.prev;a.next=b;b.prev=a;c.next=e;e.prev=
c;d.next=c;c.prev=d;l.next=d;d.prev=l;return d}function K(a,b,c,d){a=new H(a,b,c);d?(a.next=d.next,a.prev=d,d.next.prev=a,d.next=a):(a.prev=a,a.next=a);return a}function D(a){a.next.prev=a.prev;a.prev.next=a.next;a.prevZ&&(a.prevZ.nextZ=a.nextZ);a.nextZ&&(a.nextZ.prevZ=a.prevZ)}function H(a,b,c){this.i=a;this.x=b;this.y=c;this.nextZ=this.prevZ=this.z=this.next=this.prev=null;this.steiner=!1}function C(a,b,c,d){for(var e=0,l=c-d;b<c;b+=d)e+=(a[l]-a[b])*(a[b+1]+a[l+1]),l=b;return e}var w,z;y.deviation=
function(a,b,c,d){var e=b&&b.length,l=Math.abs(C(a,0,e?b[0]*c:a.length,c));if(e)for(var e=0,k=b.length;e<k;e++)l-=Math.abs(C(a,b[e]*c,e<k-1?b[e+1]*c:a.length,c));for(e=b=0;e<d.length;e+=3){var k=d[e]*c,m=d[e+1]*c,g=d[e+2]*c;b+=Math.abs((a[k]-a[g])*(a[m+1]-a[k+1])-(a[k]-a[m])*(a[g+1]-a[k+1]))}return 0===l&&0===b?0:Math.abs((b-l)/l)};y.flatten=function(a){for(var b=a[0][0].length,c={vertices:[],holes:[],dimensions:b},d=0,e=0;e<a.length;e++){for(var l=0;l<a[e].length;l++)for(var k=0;k<b;k++)c.vertices.push(a[e][l][k]);
0<e&&(d+=a[e-1].length,c.holes.push(d))}return c};return y});