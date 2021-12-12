let menu_btn = document.querySelector("#menu_btn");
let sidebar = document.querySelector(".sidebar_container");
let ancs = document.querySelectorAll(".sidebar_container ul li a");
let student_outer = document.querySelector(".student_outer");
let exam_outer = document.querySelector(".exam_outer");
let lists = document.querySelectorAll(".items_name");
let logo = document.querySelector(".logo");
const all_sidebar_lists = document.querySelectorAll(".sidebar_lists > li");

function btn1() {
  sidebar.classList.add("hello");
  // logo.style.display = 'none';
  logo.classList.add("logo_hide");
  lists.forEach((list) => {
    list.style.display = "none";
    document.querySelector("#menu_btn").style.display = "none";
    document.querySelector("#menu_btn1").style.display = "inherit";
  });

  sidebar_sub_lists.style.display = "none";
  exam_sub_lists.style.display = "none";
  student_outer.style.display = "none";
  exam_outer.style.display = "none";
  profile_outer.style.display = "none";
  profile_sub_lists.style.display = "none";
  ancs.forEach((anc) => {
    anc.style.width = "0px";
  });
}

function btn2() {
  sidebar.classList.remove("hello");
  // logo.style.display = 'none';
  logo.classList.remove("logo_hide");
  let lists = document.querySelectorAll(".items_name");
  lists.forEach((list) => {
    list.style.display = "inherit";
    document.querySelector("#menu_btn").style.display = "inherit";
    document.querySelector("#menu_btn1").style.display = "none";
  });

  sidebar_sub_lists.style.display = "inherit";
  exam_sub_lists.style.display = "inherit";
  student_outer.style.display = "inherit";
  exam_outer.style.display = "inherit";
  profile_outer.style.display = "inherit";
  profile_sub_lists.style.display = "inherit";
  ancs.forEach((anc) => {
    anc.style.width = "inherit";
  });
}

let sidebar_sub_lists = document.querySelector(".sidebar_sub_lists");

let right_down = document.querySelector(".right_down");

let right_up = document.querySelector(".right_up");

// student sub_menu

right_down.addEventListener("click", () => {
  sidebar_sub_lists.style.height = "100px";
  right_down.style.display = "none";
  right_up.style.display = "inherit";
});

right_up.addEventListener("click", () => {
  sidebar_sub_lists.style.height = "0";
  right_down.style.display = "inherit";
  right_up.style.display = "none";
});

// exam sub_menu_Start

const exam_sub_lists = document.querySelector(".exam_sub_lists");

const exam_right_down = document.querySelector(".exam_right_down");

const exam_right_up = document.querySelector(".exam_right_up");

exam_right_down.addEventListener("click", () => {
  exam_sub_lists.style.height = "52px";
  exam_right_down.style.display = "none";
  exam_right_up.style.display = "inherit";
});

exam_right_up.addEventListener("click", () => {
  exam_sub_lists.style.height = "0";
  exam_right_down.style.display = "inherit";
  exam_right_up.style.display = "none";
});

// exam sub_menu_End

let dashboard_content_inner_div = document.querySelector(
  ".dashboard_content_inner_div"
);
let bashboard_header = document.querySelector(".bashboard_header");
const dashboard = document.querySelector(".dashboard_text_one");
const students_content_inner_div = document.querySelector(
  ".students_content_inner_div"
);
const register_btn = document.querySelector(".register_btn");
const title = document.querySelector(".title");
const view_students_outer_div = document.querySelector(
  ".view_students_outer_div"
);
const view_std_btn = document.querySelector("#view_std_btn");
const std_add_btn = document.querySelector(".std_add_btn");
// console.log(title);

// Dashboard Content Function

function childone() {
  dashboard_content_inner_div.style.display = "grid";
  students_content_inner_div.style.display = "none";
  view_students_outer_div.style.display = "none";
  exam_content_inner_div.style.display = "none";
  profile_inner_div.style.display = "none";
  view_exam_outer_div.style.display = "none";
  result_outers_div.style.display = "none";
  result_contents_div.style.display = "none";
  title.textContent = "Dashboard";
  if (window.innerWidth < 768) {
    sidebar.style.width = "0";
  }
}

// Register Student Function
function reg_btn() {
  dashboard_content_inner_div.style.display = "none";
  students_content_inner_div.style.display = "inherit";
  view_students_outer_div.style.display = "none";
  exam_content_inner_div.style.display = "none";
  profile_inner_div.style.display = "none";
  view_exam_outer_div.style.display = "none";
  result_outers_div.style.display = "none";
  result_contents_div.style.display = "none";
  title.textContent = "Students";
  if (window.innerWidth < 768) {
    sidebar.style.width = "0";
  }
}

// View Student Function
view_std_btn.addEventListener("click", () => {
  view_students_outer_div.style.display = "initial";
  dashboard_content_inner_div.style.display = "none";
  students_content_inner_div.style.display = "none";
  exam_content_inner_div.style.display = "none";
  profile_inner_div.style.display = "none";
  view_exam_outer_div.style.display = "none";
  result_outers_div.style.display = "none";
  result_contents_div.style.display = "none";
  title.textContent = "Students";
  if (window.innerWidth < 768) {
    sidebar.style.width = "0";
  }
});

// Add Student Btn Function
std_add_btn.addEventListener("click", () => {
  dashboard_content_inner_div.style.display = "none";
  students_content_inner_div.style.display = "inherit";
  view_students_outer_div.style.display = "none";
  exam_content_inner_div.style.display = "none";
  profile_inner_div.style.display = "none";
  view_exam_outer_div.style.display = "none";
  result_outers_div.style.display = "none";
  result_contents_div.style.display = "none";
  title.textContent = "Students";
  if (window.innerWidth < 768) {
    sidebar.style.width = "0";
  }
});

// Examination Link Btn

const create_exam_btn = document.querySelector(".create_exam_btn");
const exam_content_inner_div = document.querySelector(
  ".exam_content_inner_div"
);
const view_exam_btn = document.querySelector(".view_exam_btn");
const view_exam_outer_div = document.querySelector(".view_exam_outer_div");

create_exam_btn.addEventListener("click", () => {
  exam_content_inner_div.style.display = "grid";
  dashboard_content_inner_div.style.display = "none";
  students_content_inner_div.style.display = "none";
  view_students_outer_div.style.display = "none";
  profile_inner_div.style.display = "none";
  view_exam_outer_div.style.display = "none";
  result_outers_div.style.display = "none";
  result_contents_div.style.display = "none";
  title.textContent = "Examination";
  if (window.innerWidth < 768) {
    sidebar.style.width = "0";
  }
});

view_exam_btn.addEventListener("click", () => {
  view_exam_outer_div.style.display = "initial";
  dashboard_content_inner_div.style.display = "none";
  students_content_inner_div.style.display = "none";
  view_students_outer_div.style.display = "none";
  exam_content_inner_div.style.display = "none";
  profile_inner_div.style.display = "none";
  result_outers_div.style.display = "none";
  result_contents_div.style.display = "none";
  title.textContent = "Examination";
  if (window.innerWidth < 768) {
    sidebar.style.width = "0";
  }
});

// Exam Buttons

let exam_title_btn = document.querySelector(".exam_title_btn");
let guideline_btn = document.querySelector(".guideline_btn");
let guideline_next_btn = document.querySelector("#guideline_next_btn");
let guideline_previous_btn = document.querySelector("#guideline_previous_btn");
let instruction_btn = document.querySelector(".instruction_btn");
let instruction_next_btn = document.querySelector("#instruction_next_btn");
let instruction_previous_btn = document.querySelector(
  "#instruction_previous_btn"
);
let rules_btn = document.querySelector(".rules_btn");
let rules_next_btn = document.querySelector("#rules_next_btn");
let rules_previous_btn = document.querySelector("#rules_previous_btn");
let attempts_btn = document.querySelector(".attempts_btn");
let attempts_previous_btn = document.querySelector("#attempts_previous_btn");

// Exam Divs
let exam_title_outer_div = document.querySelector(".exam_title_outer_div");
let guideline_form_outer_div = document.querySelector(
  ".guideline_form_outer_div"
);
let basic_form_outer_div = document.querySelector(".basic_form_outer_div");
let rules_form_outer_div = document.querySelector(".rules_form_outer_div");
let extra_attempt_form_outer_div = document.querySelector(
  ".extra_attempt_form_outer_div"
);

// steps spans

let title_span = document.querySelector(".title_span");
let guideline_span = document.querySelector(".guideline_span");
let basic_span = document.querySelector(".basic_span");
let rules_span = document.querySelector(".rules_span");

// Exam Steps Divs

let exam_title_step = document.querySelector(".exam_title_step");
let guideline_step = document.querySelector(".guideline_step");
let basic_instruction_step = document.querySelector(".basic_instruction_step");
let rules_step = document.querySelector(".rules_step");

exam_title_btn.addEventListener("click", () => {
  exam_title_outer_div.style.display = "none";
  guideline_form_outer_div.style.display = "inherit";
  exam_title_btn.style.display = "none";
  guideline_btn.style.display = "inherit";
  // exam_title_step.style.background = '#653ee7';
  exam_title_step.style.boxShadow = "inset 210px 0 0 0 #653ee7";
  exam_title_step.style.color = "#fff";
  setTimeout(() => {
    title_span.style.display = "inherit";
    title_span.style.opacity = "1";
  }, 500);
});

guideline_next_btn.addEventListener("click", () => {
  basic_form_outer_div.style.display = "inherit";
  guideline_form_outer_div.style.display = "none";
  // guideline_step.style.background = '#653ee7';
  guideline_step.style.color = "#fff";
  instruction_btn.style.display = "inherit";
  guideline_btn.style.display = "none";
  guideline_step.style.boxShadow = "inset 250px 0 0 0 #653ee7";
  setTimeout(() => {
    guideline_span.style.display = "inherit";
    guideline_span.style.opacity = "1";
  }, 500);
});

guideline_previous_btn.addEventListener("click", () => {
  exam_title_outer_div.style.display = "inherit";
  guideline_form_outer_div.style.display = "none";
  exam_title_btn.style.display = "inherit";
  guideline_btn.style.display = "none";
  // exam_title_step.style.background = '';
  exam_title_step.style.color = "";
  instruction_btn.style.display = "none";
  exam_title_btn.style.display = "inherit";
  title_span.style.opacity = "0";
  exam_title_step.style.boxShadow = "inset 0px 0 0 0 #653ee7";
});

instruction_next_btn.addEventListener("click", () => {
  rules_form_outer_div.style.display = "inherit";
  basic_form_outer_div.style.display = "none";
  // basic_instruction_step.style.background = '#653ee7';
  basic_instruction_step.style.boxShadow = "inset 250px 0 0 0 #653ee7";
  basic_instruction_step.style.color = "#fff";
  instruction_btn.style.display = "none";
  rules_btn.style.display = "inherit";
  setTimeout(() => {
    basic_span.style.display = "inherit";
    basic_span.style.opacity = "1";
  }, 500);
});

instruction_previous_btn.addEventListener("click", () => {
  guideline_form_outer_div.style.display = "inherit";
  basic_form_outer_div.style.display = "none";
  guideline_step.style.background = "";
  guideline_step.style.color = "";
  guideline_step.style.boxShadow = "inset 0 0 0 0 #653ee7";
  instruction_btn.style.display = "none";
  guideline_btn.style.display = "inherit";
  guideline_span.style.display = "none";
});

rules_next_btn.addEventListener("click", () => {
  rules_form_outer_div.style.display = "none";
  extra_attempt_form_outer_div.style.display = "inherit";
  rules_step.style.boxShadow = "inset 250px 0 0 0 #653ee7";
  rules_step.style.color = "#fff";
  rules_btn.style.display = "none";
  attempts_btn.style.display = "inherit";
  setTimeout(() => {
    rules_span.style.display = "inherit";
    rules_span.style.opacity = "1";
  }, 500);
});

rules_previous_btn.addEventListener("click", () => {
  basic_form_outer_div.style.display = "inherit";
  rules_form_outer_div.style.display = "none";
  basic_instruction_step.style.boxShadow = "inset 0px 0 0 0 #653ee7";
  basic_instruction_step.style.color = "";
  rules_btn.style.display = "none";
  instruction_btn.style.display = "inherit";
  basic_span.style.display = "none";
});

attempts_previous_btn.addEventListener("click", () => {
  rules_form_outer_div.style.display = "inherit";
  extra_attempt_form_outer_div.style.display = "none";
  rules_step.style.boxShadow = "inset 0px 0 0 0 #653ee7";
  rules_step.style.color = "";
  rules_btn.style.display = "inherit";
  attempts_btn.style.display = "none";
  rules_span.style.display = "none";
});

// sidebar btns after 768px

const menu_btn_after_768_show = document.querySelector(
  "#menu_btn_after_768_show"
);
const menu_btn_after_768_hide = document.querySelector(
  "#menu_btn_after_768_hide"
);

menu_btn_after_768_show.addEventListener("click", () => {
  sidebar.style.width = "230px";
  menu_btn.style.display = "none";
  logo.classList.remove("logo_hide");
  sidebar_sub_lists.style.display = "inherit";
  exam_sub_lists.style.display = "inherit";
  student_outer.style.display = "inherit";
  exam_outer.style.display = "inherit";
  lists.forEach((list) => {
    list.style.display = "inherit";
  });
  ancs.forEach((anc) => {
    anc.style.width = "inherit";
  });
});

menu_btn_after_768_hide.addEventListener("click", () => {
  if (window.innerWidth <= 768) {
    sidebar.style.width = "0";
    menu_btn.style.display = "none";
    logo.classList.add("logo_hide");
  } else if (window.innerWidth > 768) {
    logo.classList.remove("logo_hide");
    menu_btn.style.display = "inherit";
    sidebar.style.width = "230px";
  }
});

// profile funtions

const profile_above_768_icon = document.querySelector(".profile_above_768");
const profile_above_768_div = document.querySelector("#profile_above_768_div");
profile_above_768_div.style.display = "none";

profile_above_768_icon.addEventListener("click", () => {
  // (profile_above_768_div.style.display == 'none'?
  // profile_above_768_div.style.display = 'inherit' :
  // profile_above_768_div.style.display = 'none'
  // );

  if (profile_above_768_div.style.display == "none") {
    profile_above_768_div.style.display = "inherit";
  } else {
    profile_above_768_div.style.display = "none";
  }
});

// sidebar Profile list
const profile_outer = document.querySelector(".profile_outer");
const profile_right_down = document.querySelector(".profile_right_down");
const profile_right_up = document.querySelector(".profile_right_up");
const profile_sub_lists = document.querySelector(".profile_sub_lists");
let profile_style = profile_sub_lists.style;

profile_right_down.addEventListener("click", () => {
  profile_style.height = "120px";
  profile_right_down.style.display = "none";
  profile_right_up.style.display = "inherit";
});

profile_right_up.addEventListener("click", () => {
  profile_style.height = "0";
  profile_right_down.style.display = "inherit";
  profile_right_up.style.display = "none";
});

//  profile content div functions
const your_profile = document.querySelector(".your_profile");
const change_password = document.querySelector(".change_password");
const your_profile_content = document.querySelector(".your_profile_content");
const password_content = document.querySelector(".password_content");

your_profile.addEventListener("click", () => {
  your_profile_content.style.display = "inherit";
  password_content.style.display = "none";
  your_profile.style.background = "#8f6cfe";
  change_password.style.background = "";
});

change_password.addEventListener("click", () => {
  your_profile_content.style.display = "none";
  password_content.style.display = "inherit";
  change_password.style.background = "#8f6cfe";
  your_profile.style.background = "";
});

const sub_profile_btn = document.querySelector(".sub_profile_btn");
const sub_password_btn = document.querySelector(".sub_password_btn");
const profile_inner_div = document.querySelector(".profile_inner_div");
const above_768_profile = document.querySelector(".above_768_profile");
const above_768_chg_pass = document.querySelector(".above_768_chg_pass");

let profile_btn = () => {
  your_profile_content.style.display = "inherit";
  profile_inner_div.style.display = "initial";
  password_content.style.display = "none";
  your_profile.style.background = "#8f6cfe";
  change_password.style.background = "";
  dashboard_content_inner_div.style.display = "none";
  students_content_inner_div.style.display = "none";
  view_students_outer_div.style.display = "none";
  exam_content_inner_div.style.display = "none";
  view_exam_outer_div.style.display = "none";
  result_outers_div.style.display = "none";
  result_contents_div.style.display = "none";
  title.textContent = "Profile";
  if (window.innerWidth < 768) {
    sidebar.style.width = "0";
  }
};

let password_btnn = () => {
  profile_inner_div.style.display = "initial";
  your_profile_content.style.display = "none";
  password_content.style.display = "inherit";
  change_password.style.background = "#8f6cfe";
  your_profile.style.background = "";
  dashboard_content_inner_div.style.display = "none";
  students_content_inner_div.style.display = "none";
  view_students_outer_div.style.display = "none";
  exam_content_inner_div.style.display = "none";
  view_exam_outer_div.style.display = "none";
  result_outers_div.style.display = "none";
  result_contents_div.style.display = "none";
  title.textContent = "Profile";
  if (window.innerWidth < 768) {
    sidebar.style.width = "0";
  }
};

sub_profile_btn.addEventListener("click", profile_btn);
sub_password_btn.addEventListener("click", password_btnn);
above_768_profile.addEventListener("click", profile_btn);
above_768_chg_pass.addEventListener("click", password_btnn);

// Students funtctions

let std_search_btn = document.querySelector("#std_search_btn");
const dropdown_search = document.querySelector(".dropdown_search");

dropdown_search.style.opacity = "0";
dropdown_search.style.pointerEvents = "none";

let exam_search_div = document.querySelector(".exam_search_div");
const exam_search_dropdown = document.querySelector("#exam_search_dropdown");

exam_search_dropdown.style.opacity = "0";
exam_search_dropdown.style.pointerEvents = "none";

std_search_btn.addEventListener("click", () => {
  if (dropdown_search.style.opacity === "0") {
    dropdown_search.style.opacity = "1";
    dropdown_search.style.pointerEvents = "";
    dropdown_search.style.transform = "translateY(0px)";
  } else {
    dropdown_search.style.opacity = "0";
    dropdown_search.style.pointerEvents = "none";
    dropdown_search.style.transform = "translateY(20px)";
  }
});

exam_search_div.addEventListener("click", () => {
  if (exam_search_dropdown.style.opacity === "0") {
    exam_search_dropdown.style.opacity = "1";
    exam_search_dropdown.style.pointerEvents = "";
    exam_search_dropdown.style.transform = "translateY(0px)";
  } else {
    exam_search_dropdown.style.opacity = "0";
    exam_search_dropdown.style.pointerEvents = "none";
    exam_search_dropdown.style.transform = "translateY(20px)";
  }
});

const filter_record_div = document.querySelector(".filter_record_div");
const filter_div_std = document.querySelector(".filter_div_std");

const exam_filter_div = document.querySelector(".exam_filter");
const exam_filter = document.querySelector("#exam_filter");

filter_div_std.style.display = "none";
exam_filter.style.display = "none";

filter_record_div.addEventListener("click", () => {
  if (filter_div_std.style.display === "none") {
    filter_div_std.style.display = "inherit";
  } else {
    filter_div_std.style.display = "none";
  }
});

exam_filter_div.addEventListener("click", () => {
  if (exam_filter.style.display === "none") {
    exam_filter.style.display = "inherit";
  } else {
    exam_filter.style.display = "none";
  }
});

// Result Functions

const result_outer_div = document.querySelector(".result_outer_div");
const result_page = document.querySelector(".result_page");

result_page.addEventListener("click", () => {
  result_outer_div.style.display = "initial";
  result_contents_div.style.display = "none";
  hide_pages();
  title.textContent = "Results";
});

const hide_pages = () => {
  dashboard_content_inner_div.style.display = "none";
  students_content_inner_div.style.display = "none";
  view_students_outer_div.style.display = "none";
  exam_content_inner_div.style.display = "none";
  profile_inner_div.style.display = "none";
  view_exam_outer_div.style.display = "none";
};

// view result functions

const view_result_btn = document.querySelectorAll(".result1_inner_div div");
const result_contents_div = document.querySelector(".result_contents_div");
const result_outers_div = document.querySelector("#result_outers_div");

view_result_btn.forEach((result_btn) => {
  result_btn.addEventListener("click", () => {
    result_contents_div.style.display = "initial";
    result_outers_div.style.display = "none";
    hide_pages();
  });
});

let span_btns = document.querySelectorAll(".items_icon1");

span_btns.forEach((sidebar_spans) => {
  sidebar_spans.addEventListener("click", () => {
    sidebar.classList.remove("hello");
    // logo.style.display = 'none';
    logo.classList.remove("logo_hide");
    let lists = document.querySelectorAll(".items_name");
    lists.forEach((list) => {
      list.style.display = "inherit";
      document.querySelector("#menu_btn").style.display = "inherit";
      document.querySelector("#menu_btn1").style.display = "none";
    });

    sidebar_sub_lists.style.display = "inherit";
    exam_sub_lists.style.display = "inherit";
    student_outer.style.display = "inherit";
    exam_outer.style.display = "inherit";
    profile_outer.style.display = "inherit";
    profile_sub_lists.style.display = "inherit";
    ancs.forEach((anc) => {
      anc.style.width = "inherit";
    });
  });
});

let admin_Photo = document.querySelector(".admin_Photo");
