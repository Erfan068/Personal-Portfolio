/* =====================================================
   EDIT YOUR CONTENT HERE. Everything below DATA is behaviour.
   All entries are fictional demonstration data.
   ===================================================== */
const DATA = {
  nav: [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Education",
    "Contact",
  ],
  socials: [
    { label: "GitHub", url: "https://github.com/Erfan068" }, // replace with [GitHub URL]
  ],
  values: [
    "Curiosity",
    "Problem-solving",
    "Consistency",
    "Continuous learning",
  ],
  stats: [
    // demonstration numbers: change or delete
    { n: "10+", l: "sample projects" },
    { n: "10+", l: "technologies explored" },
    { n: "4", l: "years of learning" },
  ],
  skills: [
    {
      cat: "Frontend",
      items: [
        ["HTML5", "Comfortable"],
        ["CSS3", "Comfortable"],
        ["JavaScript", "Comfortable"],
        ["Responsive design", "Familiar"],
      ],
    },
    {
      cat: "Frameworks & tools",
      items: [
        ["React", "Learning"],
        ["TypeScript", "Learning"],
        ["Git", "Familiar"],
        ["GitHub", "Familiar"],
      ],
    },
    {
      cat: "Backend fundamentals",
      items: [
        ["Node.js", "Confortable"],
        ["Express.js", "Familiar"],
        ["REST APIs", "Familiar"],
        ["Golang", "Comfortable"],
      ],
    },
    {
      cat: "Databases",
      items: [
        ["SQL Server", "Comfortable"],
        ["MongoDB", "Familiar"],
        ["SQL fundamentals", "Comfortable"],
      ],
    },
    {
      cat: "Dev tools",
      items: [
        ["VS Code", "Comfortable"],
        ["Browser DevTools", "Comfortable"],
        ["npm", "Familiar"],
      ],
    },
    {
      cat: "Network",
      items: [
        ["Network+", "Comfortable"],
        ["Security+", "Familiar"],
        ["Passive", "Familiar"],
        ["Active", "Familiar"],
      ],
    },
    {
      cat: "Programming Languages& Concepts",
      items: [
        ["Python", "Comfortable"],
        ["PHP", "Familiar"],
        ["C++", "Familiar"],
        ["C", "Familiar"],
        ["C#", "Familiar"],
        ["Data Structures", "Familiar"],
        ["Software Architecture", "Familiar"],
      ],
    },
    {
      cat: "Interests",
      items: [
        ["UI/UX design", "Learning"],
        ["Accessibility", "Learning"],
        ["Performance", "Learning"],
        ["AI-assisted development", "Learning"],
        ["Game Development", "Learning"],
      ],
    },
  ],
  projects: [
    {
      title: "Personal Portfolio Website",
      cat: "Frontend",
      tech: ["HTML", "CSS", "JavaScript"],
      hue: [200, 260],
      desc: "A responsive site that presents my work clearly on any screen.",
      long: "A personal portfolio created with HTML,CSS,JS",
      demo: "#",
      repo: "https://github.com/Erfan068/Personal-Resume",
    },
    {
      title: "Blockchain Simulator",
      cat: "Golang",
      tech: ["Golang"],
      hue: [280, 330],
      desc: "A simple educational blockchain implementation written in Go (Golang) to explore the core concepts behind blockchain technology.",
      long: "Sample project. Covers fetching data, loading states and error handling.",
      demo: "#",
      repo: "https://github.com/Erfan068/blockchain-go",
    },
    {
      title: "Shop Store",
      cat: "NextJS",
      tech: ["NextJS"],
      hue: [160, 220],
      desc: "A simple Store created with NextJS, a JSON file for database and the options for adding or removing products.",
      long: "Sample project. Practises CRUD, authentication basics and database design.",
      demo: "#",
      repo: "https://github.com/Erfan068/store-nextJS",
    },
    {
      title: "API User Management",
      cat: "Full Stack",
      tech: ["ExpressJS", "MongoDB"],
      hue: [30, 330],
      desc: "A Management API system",
      long: "Sample project. Explores routing, validation and status codes.",
      demo: "#",
      repo: "https://github.com/Erfan068/api_user_management",
    },
  ],
  timeline: [
    {
      t: "Independent learning",
      d: "2026 – Present",
      x: "Following tutorials and docs to learn web fundamentals.",
      tags: ["Advanced React", "SQL Server", "NodeJS", "GO"],
      icon: "📚",
    },
    {
      t: "University projects",
      d: "2025",
      x: "Group and solo coursework applying programming concepts.",
      tags: ["Teamwork", "Git", ".NET", "PHP", "Python(Django)"],
      icon: "🏫",
    },
    {
      t: "Personal coding experiments",
      d: "2024",
      x: "Small apps built to test ideas and break things safely.",
      tags: ["React", "ExpressJS", "C#", "HTML/CSS", "JS", "TypeScript"],
      icon: "💻",
    },
    {
      t: "Frontend & backend practice",
      d: "2025 – Present",
      x: "Connecting interfaces to simple APIs and databases.",
      tags: ["MongoDB", "FastAPI", "RestAPI", "GraphQL"],
      icon: "🌐",
    },
    {
      t: "Goal: internship",
      d: "[Target date]",
      x: "Looking for a frontend or full-stack internship.",
      tags: ["Software Engineer Internship"],
      icon: "🎯",
    },
  ],
  education: {
    uni: "Shamsipour Technical and Vocational College",
    degree: "[IT / Associate degree]",
    dates: "[2024] – [Expected Graduation Year: 2028]",
    courses: [
      "Programming Fundamentals",
      "Databases",
      "Web Technologies",
      "Data Structures",
    ],
    projects: ["Online booking appointment system", "Hotel chain management system"],
    extra: ["Network+", "security+", "Windows Server", "linux"],
  },
  interests: [
    [
      "🤖",
      "Artificial intelligence",
      "Curious how models work and how to use them responsibly.",
    ],
    ["🎨", "UI/UX design", "I like making interfaces feel obvious."],
    ["🧩", "Problem-solving", "Puzzles and debugging sessions."],
    ["📚", "Reading", "Tech books and non-fiction."],
    ["🌱", "Personal development", "Small daily habits."],
    ["⌨️", "New languages", "Trying a new programming language each term."],
  ],
  services: [
    ["Frontend development", "Ready"],
    ["Backend development", "learning"],
    ["Database management", "learning"],
    ["Linux", "Ready"],
    ["Responsive websites", "Ready"],
    ["UI from design mockups", "Ready"],
    ["Interactive web experiences", "Learning"],
    ["API integration", "Ready"],
  ],
};

/* ---------- helpers ---------- */
const $ = (s, r = document) => r.querySelector(s);
const esc = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const slug = (s) => s.toLowerCase();
document.documentElement.classList.add("js");

/* ---------- render static data ---------- */
function render() {
  $("#navLinks").innerHTML = DATA.nav
    .map((n) => `<li><a href="#${slug(n)}">${n}</a></li>`)
    .join("");
  $("#footLinks").innerHTML = DATA.nav
    .map((n) => `<li><a href="#${slug(n)}">${n}</a></li>`)
    .join("");
  const soc = DATA.socials
    .map(
      (s) =>
        `<li><a href="${esc(s.url)}" target="_blank" rel="noopener" aria-label="${s.label}">${s.label}</a></li>`,
    )
    .join("");
  ["heroSocials", "contactSocials", "footSocials"].forEach(
    (id) => ($("#" + id).innerHTML = soc),
  );
  $("#values").innerHTML = DATA.values.map((v) => `<li>${v}</li>`).join("");
  $("#stats").innerHTML = DATA.stats
    .map((s) => `<div><dt>${s.n}</dt><dd>${s.l}</dd></div>`)
    .join("");
  $("#skillsGrid").innerHTML = DATA.skills
    .map(
      (g) =>
        `<article class="card reveal"><h3>${g.cat}</h3><ul class="tags">${g.items.map(([n, l]) => `<li data-level="${l}" title="${l}">${n} · ${l}</li>`).join("")}</ul></article>`,
    )
    .join("");
  $("#timeline").innerHTML = DATA.timeline
    .map(
      (e) =>
        `<li class="reveal"><time>${e.d}</time><h3>${e.icon ? `<span class="ti">${e.icon}</span>` : ""} ${e.t}<span class="demo"></span></h3><p>${e.x}</p><ul class="tags">${e.tags.map((t) => `<li>${t}</li>`).join("")}</ul></li>`,
    )
    .join("");
  const ed = DATA.education;
  $("#edu").innerHTML =
    `<h3>${ed.uni}</h3><p>${ed.degree} · ${ed.dates}</p><h4>Relevant courses</h4><ul>${ed.courses.map((c) => `<li>${c}</li>`).join("")}</ul><h4>Academic projects</h4><ul>${ed.projects.map((c) => `<li>${c}</li>`).join("")}</ul><h4>Additional courses and certificates</h4><ul>${ed.extra.map((c) => `<li>${c}</li>`).join("")}</ul>`;
  $("#interestGrid").innerHTML = DATA.interests
    .map(
      ([i, t, d]) =>
        `<article class="card reveal"><div aria-hidden="true" style="font-size:2rem">${i}</div><h3>${t}</h3><p>${d}</p></article>`,
    )
    .join("");
  $("#serviceGrid").innerHTML = DATA.services
    .map(
      ([t, s]) =>
        `<article class="card reveal"><h3>${t}</h3><p class="state">${s === "Ready" ? "Available now" : "Still learning"}</p></article>`,
    )
    .join("");
  $("#resumeBody").innerHTML =
    `<h3>Profile</h3><p>IT student focused on frontend development, learning full-stack skills.</p>`;
  $("#year").textContent = new Date().getFullYear();
}

/* ---------- projects: filter + modal + tilt ---------- */
function setupProjects() {
  const cats = ["All", ...new Set(DATA.projects.map((p) => p.cat))];
  const grid = $("#projectGrid"),
    modal = $("#modal");
  $("#filters").innerHTML = cats
    .map(
      (c, i) =>
        `<button type="button" aria-pressed="${i === 0}" data-c="${c}">${c}</button>`,
    )
    .join("");
  const show = (cat) => {
    const list = DATA.projects.filter((p) => cat === "All" || p.cat === cat);
    grid.innerHTML = list
      .map(
        (p) =>
          `<button type="button" class="card project" style="--i:${list.indexOf(p)}" data-t="${esc(p.title)}"><div class="thumb" style="background:linear-gradient(135deg,hsl(${p.hue[0]} 80% 45%),hsl(${p.hue[1]} 70% 35%))" aria-hidden="true">${esc(p.title.slice(0, 2))}</div><div class="body"><span class="cat">${p.cat}</span><h3>${esc(p.title)}</h3><p>${esc(p.desc)}</p><ul class="tags">${p.tech.map((t) => `<li>${t}</li>`).join("")}</ul></div></button>`,
      )
      .join("");
    $("#empty").hidden = list.length > 0;
  };
  show("All");
  $("#filters").addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    $("#filters")
      .querySelectorAll("button")
      .forEach((x) => x.setAttribute("aria-pressed", x === b));
    show(b.dataset.c);
  });
  grid.addEventListener("click", (e) => {
    const card = e.target.closest(".project");
    if (!card) return;
    const p = DATA.projects.find((x) => x.title === card.dataset.t);
    $("#mBody").innerHTML =
      `<h3 id="mTitle">${esc(p.title)}</h3><p class="cat">${p.cat}</p><p>${esc(p.long)}</p><ul class="tags">${p.tech.map((t) => `<li>${t}</li>`).join("")}</ul><p class="note">Placeholder links: replace with real URLs in js/script.js.</p><a class="btn btn-sm btn-ghost" href="${p.repo}">GitHub</a>`;
    modal.showModal();
  });
  $("#mClose").onclick = () => modal.close();
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.close();
  });
  // 3D tilt (pointer devices only, via delegation so it survives re-rendering)
  if (!reduce && matchMedia("(hover:hover)").matches) {
    grid.addEventListener("pointermove", (e) => {
      const c = e.target.closest(".project");
      if (!c) return;
      const r = c.getBoundingClientRect(),
        x = (e.clientX - r.left) / r.width - 0.5,
        y = (e.clientY - r.top) / r.height - 0.5;
      c.style.transform = `rotateY(${x * 12}deg) rotateX(${-y * 12}deg)`;
    });
    grid.addEventListener("pointerout", (e) => {
      const c = e.target.closest(".project");
      if (c) c.style.transform = "";
    });
  }
}

/* ---------- nav, theme, scroll effects ---------- */
function setupUI() {
  const nav = $("#nav"),
    menu = $("#menu"),
    btn = $("#menuBtn");
  const setMenu = (open) => {
    menu.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", open);
    btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };
  btn.onclick = () => setMenu(!menu.classList.contains("open"));
  menu.addEventListener("click", (e) => {
    if (e.target.closest("a")) setMenu(false);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("open")) {
      setMenu(false);
      btn.focus();
    }
  });

  const root = document.documentElement,
    tb = $("#themeBtn");
  const applyTheme = (t) => {
    root.dataset.theme = t;
    tb.setAttribute(
      "aria-label",
      `Switch to ${t === "dark" ? "light" : "dark"} theme`,
    );
  };
  let saved = "dark";
  try {
    saved = localStorage.getItem("theme") || "dark";
  } catch (_) {}
  applyTheme(saved);
  tb.onclick = () => {
    const t = root.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(t);
    try {
      localStorage.setItem("theme", t);
    } catch (_) {}
  };

  const bar = $("#progress"),
    top = $("#toTop");
  let tick = false;
  addEventListener(
    "scroll",
    () => {
      if (tick) return;
      tick = true;
      requestAnimationFrame(() => {
        const h = document.documentElement.scrollHeight - innerHeight;
        bar.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`;
        nav.classList.toggle("scrolled", scrollY > 30);
        scrollFX(h);
        tick = false;
      });
    },
    { passive: true },
  );
  const cv = $("#scene"),
    copy = $(".hero-copy"),
    tl = $("#timeline"),
    par = [...document.querySelectorAll("[data-speed]")];
  const scrollFX = (h) => {
    const docH =
      typeof h === "number"
        ? h
        : document.documentElement.scrollHeight - innerHeight;
    const mobile = innerWidth <= 980;
    if (reduce) return;
    const k = Math.min(scrollY / Math.max(innerHeight, 1), 1);
    copy.style.translate = mobile ? "0 0" : `0 ${scrollY * 0.18}px`;
    copy.style.opacity = mobile ? Math.max(0.92, 1 - k * 0.25) : 1 - k * 0.9;
    cv.style.opacity = Math.max(0.28, (mobile ? 0.55 : 0.72) - k * 0.35);
    par.forEach((el) => {
      if (mobile) {
        el.style.translate = "";
        return;
      }
      const r = el.getBoundingClientRect();
      el.style.translate = `0 ${-(r.top + r.height / 2 - innerHeight / 2) * el.dataset.speed}px`;
    });
    if (tl) {
      const t = tl.getBoundingClientRect();
      tl.style.setProperty(
        "--p",
        Math.min(1, Math.max(0, (innerHeight * 0.6 - t.top) / t.height)),
      );
    }
  };
  scrollFX();
  top.onclick = () =>
    scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });

  // active link
  const links = [...document.querySelectorAll("#navLinks a")];
  const spy = new IntersectionObserver(
    (es) =>
      es.forEach((en) => {
        if (en.isIntersecting)
          links.forEach((a) =>
            a.classList.toggle("active", a.hash === "#" + en.target.id),
          );
      }),
    { rootMargin: "-45% 0px -50% 0px" },
  );
  DATA.nav.forEach((n) => {
    const s = document.getElementById(slug(n));
    if (s) spy.observe(s);
  });

  // scroll animation variants and stagger
  const tag = (sel, cls) =>
    document.querySelectorAll(sel).forEach((el, i) => {
      el.classList.add("reveal");
      if (cls) el.classList.add(cls);
      el.style.setProperty("--d", (i % 6) * 90 + "ms");
    });
  tag(".section>h2");
  tag(".section>.sub");
  tag(".filters");
  tag("#skillsGrid>*", "r-flip");
  tag("#interestGrid>*", "r-zoom");
  tag("#serviceGrid>*", "r-flip");
  document
    .querySelectorAll(".timeline li")
    .forEach((li, i) => li.classList.add(i % 2 ? "r-right" : "r-left"));
  tag(".stats>*", "r-zoom");
  tag("#edu", "r-zoom");
  tag(".resume", "r-zoom");
  tag("#form", "r-left");
  tag(".contact-grid>.card:last-child", "r-right");
  $(".about-grid .avatar").classList.add("r-left");
  $(".about-grid>div:last-child").classList.add("r-right");
  $(".avatar").dataset.speed = 0.08;
  // animated counters
  const cio = new IntersectionObserver(
    (es) =>
      es.forEach((en) => {
        if (!en.isIntersecting) return;
        cio.unobserve(en.target);
        const m = en.target.textContent.match(/(\d+)(.*)/);
        if (!m || reduce) return;
        const end = +m[1],
          t0 = performance.now();
        const step = (now) => {
          const p = Math.min((now - t0) / 1200, 1);
          en.target.textContent =
            Math.round(end * (1 - Math.pow(1 - p, 3))) + m[2];
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }),
    { threshold: 0.6 },
  );
  document.querySelectorAll(".stats dt").forEach((d) => cio.observe(d));
  // reveal on scroll
  const io = new IntersectionObserver(
    (es) =>
      es.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      }),
    { threshold: 0.12 },
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  // resume file check: show fallback if the PDF is missing
  const rb = $("#resumeBtn");
  fetch(rb.getAttribute("href"), { method: "HEAD" })
    .then((r) => {
      if (!r.ok) throw 0;
    })
    .catch(() => {
      rb.removeAttribute("download");
      rb.setAttribute("aria-disabled", "true");
      rb.style.opacity = 0.5;
      rb.addEventListener("click", (e) => e.preventDefault());
      $("#resumeNote").hidden = false;
    });
}

/* ---------- contact form (Formspree integration) ---------- */
function setupForm() {
  const f = $("#form"),
    status = $("#status");
  const rules = {
    name: (v) => (v.trim() ? "" : "Enter your name."),
    email: (v) =>
      !v.trim()
        ? "Enter your email."
        : /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)
          ? ""
          : "Enter a valid email, like name@example.com.",
    subject: (v) => (v.trim() ? "" : "Enter a subject."),
    message: (v) =>
      v.trim().length >= 10 ? "" : "Write at least 10 characters.",
  };
  const check = (k) => {
    const el = f.elements[k],
      m = rules[k](el.value);
    $("#" + k + "-err").textContent = m;
    el.setAttribute("aria-invalid", !!m);
    el.setAttribute("aria-describedby", k + "-err");
    return !m;
  };
  Object.keys(rules).forEach((k) =>
    f.elements[k].addEventListener("blur", () => check(k)),
  );
  f.addEventListener("submit", (e) => {
    e.preventDefault();
    const ok = Object.keys(rules).map(check).every(Boolean);
    if (!ok) {
      status.textContent = "Fix the highlighted fields and try again.";
      f.querySelector("[aria-invalid=true]")?.focus();
      return;
    }

    // Show loading state
    const btn = f.querySelector("button[type=submit]");
    const originalText = btn.textContent;
    btn.textContent = "Sending...";
    btn.disabled = true;
    status.style.color = "var(--a1)";
    status.textContent = "Sending your message...";

    // Submit form to Formspree
    const formData = new FormData(f);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    fetch(f.action, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.ok) {
          status.textContent = "Message sent successfully! I will get back to you soon.😁";
          status.style.color = "#4ade80";
          f.reset();
        } else {
          status.textContent = "? " + (result.error || "Failed to send. Please try again.");
          status.style.color = "#f87171";
        }
      })
      .catch(() => {
        status.textContent = "? Network error. Please check your connection and try again.";
        status.style.color = "#f87171";
      })
      .finally(() => {
        btn.textContent = originalText;
        btn.disabled = false;
      });
  });
}

/* ---------- 3D scene: one fixed canvas that reacts to scrolling ---------- */
function setupScene() {
  const canvas = $("#scene");
  if (!window.THREE || reduce) {
    canvas.style.display = "none";
    return;
  }
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
  } catch (_) {
    canvas.style.display = "none";
    return;
  }
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  const scene = new THREE.Scene(),
    cam = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
  cam.position.z = 8;
  scene.add(new THREE.AmbientLight(0xffffff, 0.5));
  const l1 = new THREE.PointLight(0x38bdf8, 1.8, 40);
  l1.position.set(5, 4, 5);
  scene.add(l1);
  const l2 = new THREE.PointLight(0x8b5cf6, 1.8, 40);
  l2.position.set(-5, -3, 4);
  scene.add(l2);
  const group = new THREE.Group(),
    inner = new THREE.Group();
  group.add(inner);
  scene.add(group);
  const core = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.5, 1),
    new THREE.MeshStandardMaterial({
      color: 0x1e2a55,
      metalness: 0.6,
      roughness: 0.25,
      flatShading: true,
    }),
  );
  const wire = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.9, 1),
    new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    }),
  );
  inner.add(core, wire);
  const orbit = [];
  for (let i = 0; i < 14; i++) {
    const m = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.12 + Math.random() * 0.12),
      new THREE.MeshStandardMaterial({
        color: i % 2 ? 0x8b5cf6 : 0x38bdf8,
        roughness: 0.3,
      }),
    );
    m.userData = {
      r: 2.6 + Math.random() * 1.6,
      s: 0.2 + Math.random() * 0.4,
      a: Math.random() * 6.28,
      y: (Math.random() - 0.5) * 3,
    };
    inner.add(m);
    orbit.push(m);
  }
  // star field that drifts with scroll
  const N = 700,
    pos = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) {
    const r = 8 + Math.random() * 14,
      a = Math.random() * 6.28,
      b = Math.acos(2 * Math.random() - 1);
    pos.set(
      [
        r * Math.sin(b) * Math.cos(a),
        r * Math.sin(b) * Math.sin(a),
        r * Math.cos(b),
      ],
      i * 3,
    );
  }
  const sg = new THREE.BufferGeometry();
  sg.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  const stars = new THREE.Points(
    sg,
    new THREE.PointsMaterial({
      color: 0x9fb4ff,
      size: 0.05,
      transparent: true,
      opacity: 0.8,
    }),
  );
  scene.add(stars);
  // floating shapes at different depths (parallax with scroll)
  const geos = [
    new THREE.TorusGeometry(0.7, 0.22, 12, 32),
    new THREE.TetrahedronGeometry(0.8),
    new THREE.TorusKnotGeometry(0.5, 0.16, 64, 8),
    new THREE.BoxGeometry(0.9, 0.9, 0.9),
    new THREE.OctahedronGeometry(0.8),
  ];
  const floaters = geos.map((g, i) => {
    const m = new THREE.Mesh(
      g,
      new THREE.MeshStandardMaterial({
        color: i % 2 ? 0x38bdf8 : 0x8b5cf6,
        wireframe: i % 2 === 0,
        metalness: 0.5,
        roughness: 0.3,
      }),
    );
    m.userData = {
      x: (i % 2 ? 1 : -1) * (4 + i * 0.6),
      y: -i * 3.2,
      z: -2 - i * 0.8,
    };
    scene.add(m);
    return m;
  });
  let mx = 0,
    my = 0,
    raf = 0,
    p = 0,
    sy = 0;
  const wide = () => canvas.clientWidth > 900;
  const resize = () => {
    const w = canvas.clientWidth,
      h = canvas.clientHeight;
    renderer.setSize(w, h, false);
    cam.aspect = w / h;
    cam.updateProjectionMatrix();
    group.scale.setScalar(wide() ? 1 : 0.65);
  };
  resize();
  addEventListener("resize", resize);
  addEventListener(
    "pointermove",
    (e) => {
      mx = e.clientX / innerWidth - 0.5;
      my = e.clientY / innerHeight - 0.5;
    },
    { passive: true },
  );
  addEventListener(
    "scroll",
    () => {
      const h = document.documentElement.scrollHeight - innerHeight;
      sy = scrollY;
      p = h > 0 ? sy / h : 0;
    },
    { passive: true },
  );
  const clock = new THREE.Clock();
  const loop = () => {
    raf = requestAnimationFrame(loop);
    const t = clock.getElapsedTime();
    core.rotation.set(t * 0.2, t * 0.3, 0);
    wire.rotation.set(-t * 0.15, t * 0.2, 0);
    // main object swings left and right and tumbles as you scroll
    const tx = wide() ? 2.6 * Math.cos(p * Math.PI * 5) : 0,
      ty = Math.sin(p * Math.PI * 3) * 1.2;
    group.position.x += (tx - group.position.x) * 0.06;
    group.position.y += (ty - group.position.y) * 0.06;
    inner.rotation.y = p * Math.PI * 6;
    inner.rotation.x = p * Math.PI * 2;
    group.scale.setScalar(
      (wide() ? 1 : 0.65) * (1 + Math.sin(p * Math.PI * 4) * 0.18),
    );
    group.rotation.y += (mx * 0.6 - group.rotation.y) * 0.05;
    group.rotation.x += (my * 0.4 - group.rotation.x) * 0.05;
    orbit.forEach((o) => {
      const d = o.userData;
      d.a += d.s * 0.01;
      o.position.set(
        Math.cos(d.a) * d.r,
        d.y + Math.sin(t + d.a) * 0.2,
        Math.sin(d.a) * d.r,
      );
      o.rotation.x = t;
    });
    stars.rotation.y = t * 0.01 + p * 2;
    stars.rotation.x = p * 0.8;
    floaters.forEach((f, i) => {
      const u = f.userData;
      f.position.set(
        u.x,
        u.y + sy * (0.004 + i * 0.0012) + Math.sin(t + i) * 0.2,
        u.z,
      );
      f.rotation.set(t * 0.3 + p * 4, t * 0.2 + i, 0);
    });
    renderer.render(scene, cam);
  };
  const toggle = () => {
    if (!document.hidden && !raf) loop();
    if (document.hidden && raf) {
      cancelAnimationFrame(raf);
      raf = 0;
    }
  };
  document.addEventListener("visibilitychange", toggle);
  toggle();
}

render();
setupProjects();
setupUI();
setupForm();
addEventListener("load", setupScene);
