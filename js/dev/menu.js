$(".menu-btn").on("click", function () {
  $(".menu-btn").removeClass("menu-btn-active");
  $(this).addClass("menu-btn-active");

  if (!$(this).hasClass("show")) {
    $("body").removeClass("nav-active");
  } else {
    $("body").addClass("nav-active");
  }
});

// Sticky menu when scrolling
const mainHeader = $(".header");
const headerScrollThreshold = 80;
$(window).on("scroll", function () {
  const scroll = $(window).scrollTop();

  if (scroll >= headerScrollThreshold) {
    mainHeader.addClass("header-sticky");
  } else {
    mainHeader.removeClass("header-sticky");
  }
});

$(document).on("keyup", function (e) {
  if (e.key === "Escape") {
    $("body").removeClass("nav-active");
  }
});

// Show megamenu
$(".js-megamenu-toggler").on("click", function () {
  $(this).closest(".main-submenu-group").hide();
  $(this).closest(".main-submenu").find(".megamenu-wrapper").show();
});

// Megamenu back button
$(".megamenu-back-btn").on("click", function () {
  $(this).closest(".megamenu-wrapper").hide();
  $(this).closest(".main-submenu").find(".main-submenu-group").show();
});

function initMegaMenu() {
  const $megamenuWrapper = $(".megamenu-wrapper");
  const $megamenuListItems = $(".megamenu-list .list-group-item");
  const $megamenuCenterItems = $(".megamenu-center-item");
  const $megamenuCenter = $(".megamenu-center");

  function showCenterItem(centerId) {
    $megamenuCenterItems.hide();
    $(`.center-id-${centerId}`).show();
  }

  function handleResponsive() {
    if (window.innerWidth >= 1024) {
      $megamenuCenter.show();

      // Show first item by default when megamenu becomes visible
      if ($megamenuWrapper.is(":visible")) {
        const firstCenterId = $megamenuListItems.first().data("center-id");
        if (firstCenterId) {
          showCenterItem(firstCenterId);
        }
      }
    } else {
      // Mobile behavior - hide center, stack left and right
      $megamenuCenter.hide();
    }
  }

  $megamenuListItems.on("mouseenter", function () {
    if (window.innerWidth >= 1024) {
      const centerId = $(this).data("center-id");
      if (centerId) {
        showCenterItem(centerId);
      }
    }
  });

  // Initialize on megamenu wrapper show
  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "style"
      ) {
        const target = mutation.target;
        if (
          $(target).hasClass("megamenu-wrapper") &&
          $(target).is(":visible")
        ) {
          handleResponsive();
        }
      }
    });
  });

  // Observe megamenu wrapper for visibility changes
  $megamenuWrapper.each(function () {
    observer.observe(this, { attributes: true, attributeFilter: ["style"] });
  });

  // Handle window resize
  $(window).on("resize", handleResponsive);

  // Initial setup
  handleResponsive();
}

// Initialize megamenu functionality
$(document).ready(function () {
  initMegaMenu();
});
