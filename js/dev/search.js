// Show search console (from the menu)
$(".search-toggler").on("click", function () {
  $(this).closest(".main-submenu-group").hide();
  $(this).closest(".main-submenu").find(".search-wrapper").show();
});

// Search back button
$(".search-back-btn").on("click", function () {
  $(this).closest(".search-wrapper").hide();
  $(this).closest(".main-submenu").find(".main-submenu-group").show();
  $("body").removeClass("search-general-active");
});

// Update text and value of the search console buttons by selecting options from their dropdown
$(".js-search-select li").on("click keydown", function (event) {
  // Skip hero search dropdowns - they have their own handler in HeroSearch object
  if (
    $(this).closest("#hero-cities-list, #hero-domains-list, #hero-periods-list")
      .length > 0
  ) {
    return;
  }

  const thisText = $(this).text().trim();
  if (event.key === "Enter" || event.type === "click") {
    $(this).addClass("selected").siblings().removeClass("selected");
    $(this)
      .parent()
      .parent()
      .siblings(".search-console-slice-btn")
      .val(thisText);
    $(this)
      .parent()
      .parent()
      .siblings(".search-console-slice-btn")
      .children(".search-console-selection")
      .text(thisText);
    $(this)
      .parent()
      .parent()
      .siblings(".search-console-slice-btn")
      .children(".search-console-selection")
      .addClass("scs-active");
  }
});

// Modify the padding of the search's dropdown to accomodate the scrollbar when there are many options
$(".search-console-slice-btn").on("click", function () {
  if ($(this).siblings(".search-console-slice-dropdown").hasClass("show")) {
    const searchDropdownHeight = $(this)
      .siblings(".search-console-slice-dropdown.show")
      .children("ul")[0].scrollHeight;

    if (searchDropdownHeight > 255) {
      $(this)
        .siblings(".search-console-slice-dropdown")
        .addClass("scsDropOverflow");
    }
  }
});

// Show search console outside of the menu in the hero area
$(".search-trigger-mobile").on("click", function () {
  $(this).siblings(".search-wrapper-general").fadeIn();
  $("body").addClass("search-general-active");
});

// ========================================
// HERO SEARCH SYSTEM - Interactive Filtering
// ========================================

const HeroSearch = {
  state: {
    selectedCityId: null,
    selectedCitySlug: null,
    selectedCityName: null,
    selectedDomainSlug: null,
    selectedDomainName: null,
    selectedPeriodId: null,
    selectedStartDate: null,
    selectedEndDate: null,
    selectedPeriodText: null,
    isFiltering: false,
  },

  init: function () {
    if (typeof apsapSearchData === "undefined") {
      console.log("HeroSearch: apsapSearchData not defined, skipping init");
      return;
    }

    this.bindEvents();
    this.restoreSelections();
  },

  bindEvents: function () {
    const self = this;

    // City selection
    $(document).on("click keydown", "#hero-cities-list li", function (e) {
      if ($(this).attr("tabindex") === "-1") return; // Skip loading placeholder

      if (e.key === "Enter" || e.type === "click") {
        const $this = $(this);
        self.state.selectedCityId = $this.data("city-id");
        self.state.selectedCitySlug = $this.data("city-slug");
        self.state.selectedCityName = $this.data("city-name");

        console.log(self.state);

        console.log("HeroSearch: City selected", {
          id: self.state.selectedCityId,
          slug: self.state.selectedCitySlug,
          name: self.state.selectedCityName,
        });

        // Update UI
        $this.addClass("selected").siblings().removeClass("selected");

        // Update button text
        $("#searchTriggerDrop-1a .search-console-selection")
          .text(self.state.selectedCityName)
          .addClass("scs-active");

        // Filter domains and periods by this city
        if (self.state.selectedCityId) {
          self.filterBySelection();
        }
      }
    });

    // Domain selection
    $(document).on("click keydown", "#hero-domains-list li", function (e) {
      if ($(this).attr("tabindex") === "-1") return; // Skip loading placeholder

      if (e.key === "Enter" || e.type === "click") {
        const $this = $(this);
        self.state.selectedDomainSlug = $this.data("domain-slug");
        self.state.selectedDomainName = $this.data("domain-name");

        // Update UI
        $this.addClass("selected").siblings().removeClass("selected");

        // Update button text
        $("#searchTriggerDrop-2a .search-console-selection")
          .text(self.state.selectedDomainName)
          .addClass("scs-active");

        // Filter cities and periods by this domain
        if (self.state.selectedDomainSlug) {
          self.filterBySelection();
        }
      }
    });

    // Period selection
    $(document).on("click keydown", "#hero-periods-list li", function (e) {
      if ($(this).attr("tabindex") === "-1") return; // Skip loading placeholder

      if (e.key === "Enter" || e.type === "click") {
        const $this = $(this);
        self.state.selectedPeriodId = $this.data("period-id");
        self.state.selectedStartDate = $this.data("start-date");
        self.state.selectedEndDate = $this.data("end-date");

        // Get the period text from first div
        self.state.selectedPeriodText = $this.find("div:first").text().trim();

        console.log("HeroSearch: Period selected", {
          id: self.state.selectedPeriodId,
          startDate: self.state.selectedStartDate,
          endDate: self.state.selectedEndDate,
          text: self.state.selectedPeriodText,
        });

        // Update UI
        $this.addClass("selected").siblings().removeClass("selected");

        // Update button text
        $("#searchTriggerDrop-3a .search-console-selection")
          .text(self.state.selectedPeriodText)
          .addClass("scs-active");

        // Filter cities and domains by this period
        if (self.state.selectedStartDate && self.state.selectedEndDate) {
          self.filterBySelection();
        }
      }
    });

    // Search button click
    $(".search-console-bubbles, #hero-search-btn").on("click", function (e) {
      e.preventDefault();
      self.performSearch();
    });
  },

  filterDomainsByCity: function (cityId) {
    if (this.state.isFiltering) return;
    this.state.isFiltering = true;

    $.ajax({
      url: apsapSearchData.ajaxUrl,
      method: "POST",
      data: {
        action: "apsap_get_filtered_search",
        nonce: apsapSearchData.nonce,
        city_id: cityId,
      },
      success: (response) => {
        this.state.isFiltering = false;
        if (response.success && response.data.domains) {
          // Show only available domains
          const availableSlugs = response.data.domains.map((d) => d.slug);
          $("#hero-domains-list li").each(function () {
            const slug = $(this).data("domain-slug");
            if (slug) {
              $(this).toggle(availableSlugs.includes(slug));
            }
          });
          console.log("HeroSearch: Filtered domains by city", availableSlugs);
        }
      },
      error: () => {
        this.state.isFiltering = false;
        console.error("HeroSearch: Failed to filter domains");
      },
    });
  },

  filterCitiesByDomain: function (domainSlug) {
    if (this.state.isFiltering) return;
    this.state.isFiltering = true;

    $.ajax({
      url: apsapSearchData.ajaxUrl,
      method: "POST",
      data: {
        action: "apsap_get_filtered_search",
        nonce: apsapSearchData.nonce,
        domain_slug: domainSlug,
      },
      success: (response) => {
        this.state.isFiltering = false;
        if (response.success && response.data.cities) {
          // Show only available cities
          const availableIds = response.data.cities.map((c) => c.city_id);
          $("#hero-cities-list li").each(function () {
            const cityId = $(this).data("city-id");
            if (cityId) {
              $(this).toggle(availableIds.includes(cityId));
            }
          });
          console.log("HeroSearch: Filtered cities by domain", availableIds);
        }
      },
      error: () => {
        this.state.isFiltering = false;
        console.error("HeroSearch: Failed to filter cities");
      },
    });
  },

  /**
   * Unified filtering method - filters all three dropdowns based on current selection
   * Supports interdependent filtering across city, domain, and period
   */
  filterBySelection: function () {
    if (this.state.isFiltering) return;
    this.state.isFiltering = true;

    const requestData = {
      action: "apsap_get_filtered_search",
      nonce: apsapSearchData.nonce,
    };

    // Add current selections to request
    if (this.state.selectedCityId) {
      requestData.city_id = this.state.selectedCityId;
    }
    if (this.state.selectedDomainSlug) {
      requestData.domain_slug = this.state.selectedDomainSlug;
    }
    if (this.state.selectedStartDate && this.state.selectedEndDate) {
      requestData.start_date = this.state.selectedStartDate;
      requestData.end_date = this.state.selectedEndDate;
    }

    console.log("HeroSearch: Filtering with params:", requestData);

    $.ajax({
      url: apsapSearchData.ajaxUrl,
      method: "POST",
      data: requestData,
      success: (response) => {
        this.state.isFiltering = false;

        if (!response.success) {
          console.error("HeroSearch: Filter API returned error");
          return;
        }

        // Filter cities dropdown (if not the selected dimension)
        if (!this.state.selectedCityId && response.data.cities) {
          const availableCityIds = response.data.cities.map((c) => c.city_id);
          $("#hero-cities-list li").each(function () {
            const cityId = $(this).data("city-id");
            if (cityId) {
              $(this).toggle(availableCityIds.includes(cityId));
            }
          });
          console.log(
            "HeroSearch: Filtered cities",
            availableCityIds.length + " available"
          );
        }

        // Filter domains dropdown (if not the selected dimension)
        if (!this.state.selectedDomainSlug && response.data.domains) {
          const availableDomainSlugs = response.data.domains.map((d) => d.slug);
          $("#hero-domains-list li").each(function () {
            const slug = $(this).data("domain-slug");
            if (slug) {
              $(this).toggle(availableDomainSlugs.includes(slug));
            }
          });
          console.log(
            "HeroSearch: Filtered domains",
            availableDomainSlugs.length + " available"
          );
        }

        // Filter periods dropdown (if not the selected dimension)
        if (!this.state.selectedPeriodId && response.data.periods) {
          const availablePeriodIds = response.data.periods.map(
            (p) => p.period_id
          );
          $("#hero-periods-list li").each(function () {
            const periodId = $(this).data("period-id");
            if (periodId) {
              $(this).toggle(availablePeriodIds.includes(periodId));
            }
          });
          console.log(
            "HeroSearch: Filtered periods",
            availablePeriodIds.length + " available"
          );
        }
      },
      error: () => {
        this.state.isFiltering = false;
        console.error("HeroSearch: Failed to fetch filtered data");
      },
    });
  },

  performSearch: function () {
    const city = this.state.selectedCitySlug;
    const domain = this.state.selectedDomainSlug;
    const period = this.state.selectedPeriodId;
    const startDate = this.state.selectedStartDate;
    const endDate = this.state.selectedEndDate;

    console.log("HeroSearch: performSearch called with state:", {
      city: city,
      domain: domain,
      period: period,
      fullState: this.state,
    });

    let url = "";

    if (city && domain) {
      // Both selected → /oferta-cursuri-tematica/{domain}/{city}/
      url = `/oferta-cursuri-tematica/${domain}/${city}/`;
    } else if (domain) {
      // Only domain → /oferta-cursuri-tematica/{domain}/
      url = `/oferta-cursuri-tematica/${domain}/`;
    } else if (city) {
      // Only city selected
      if (city === "on-line") {
        // Special case: online courses page
        url = `/cursuri-acreditate-online/`;
      } else {
        // Regular location page
        url = `/oferta-cursuri-cazare/${city}/`;
      }
    } else if (period && startDate && endDate) {
      // Only period selected → period page with date params
      url = `/oferta-cursuri-perioada/?start_date=${startDate}&end_date=${endDate}`;
      console.log("HeroSearch: Period-only search", {
        startDate: startDate,
        endDate: endDate,
      });
    } else {
      // Nothing selected
      console.error("HeroSearch: No city, domain or period selected!");
      alert("Te rugăm să selectezi o locație, o tematică sau o perioadă.");
      return;
    }

    console.log("HeroSearch: Redirecting to", url);
    window.location.href = url;
  },

  restoreSelections: function () {
    // Restore from URL (already set via PHP classes 'selected')
    const $selectedCity = $("#hero-cities-list li.selected");
    const $selectedDomain = $("#hero-domains-list li.selected");

    if ($selectedCity.length) {
      this.state.selectedCityId = $selectedCity.data("city-id");
      this.state.selectedCitySlug = $selectedCity.data("city-slug");
      this.state.selectedCityName = $selectedCity.data("city-name");

      // Filter domains based on preselected city
      if (this.state.selectedCityId) {
        this.filterDomainsByCity(this.state.selectedCityId);
      }
    }

    if ($selectedDomain.length) {
      this.state.selectedDomainSlug = $selectedDomain.data("domain-slug");
      this.state.selectedDomainName = $selectedDomain.data("domain-name");

      // Filter cities based on preselected domain
      if (this.state.selectedDomainSlug) {
        this.filterCitiesByDomain(this.state.selectedDomainSlug);
      }
    }
  },
};

// Initialize on page load
$(document).ready(function () {
  HeroSearch.init();
});
