class CertificateHandler {
	constructor() {
		this.target = $('#certificates-list');
	}

	getTemplate({ name, logo, date, url, org }) {
		return `<div class="col-xs-12 col-sm-6">
                      <div class="certificate-item clearfix">
                        <div class="certi-logo">
                          <img src="img/certificates/${logo}" alt="logo">
                        </div>

                        <div class="certi-content">
                          <div class="certi-title">
                            <h4>${name}</h4>
                          </div>
                          <div class="certi-date">
                            <span>${date}</span>
                          </div>
                          <div class="certi-company">
                            <a href="${url}" target="_blank"><span>${org}</span></a>
                          </div>
                        </div>
                      </div>
                    </div>`;
	}

	appendToDOM(html) {
		$(this.target).append(html);
	}

	renderAllTemplates(data) {
		for (let i = 0; i < data.length; i++) {
			this.appendToDOM(this.getTemplate(data[i]));
		}
	}
}
const certificateHandler = new CertificateHandler();

const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10);

class ClientHandler {
	constructor() {
		this.target = $('#clients-list');
	}

	getTemplate({ name, logo, url }) {
		return `<div class="client-block" id="clients-list">
					<a href="${url}" target="_blank" title="${name}">
					<img src="img/clients/${logo}" alt="${name}">
					</a>
				</div>`;
	}

	appendToDOM(html) {
		$(this.target).append(html);
	}

	renderAllTemplates(data) {
		for (let i = 0; i < data.length; i++) {
			this.appendToDOM(this.getTemplate(data[i]));
		}
		// Clients Slider
		$('.clients.owl-carousel')
			.imagesLoaded()
			.owlCarousel({
				nav: false,
				items: 2,
				loop: false,
				navText: false,
				margin: 10,
				autoHeight: true,
				rtl: true,
				autoplay: true,
				autoplayTimeout: 3000,
				autoplayHoverPause: false,
				responsive: {
					// breakpoint from 0 up
					0: {
						items: 2,
					},
					// breakpoint from 768 up
					768: {
						items: 4,
					},
					1200: {
						items: 5,
					},
				},
			});
	}
}

const clientHandler = new ClientHandler();

$(function () {
	// Render All Certificates
	certificateHandler.renderAllTemplates(CERTIFICATES);

	// Render All Clients
	clientHandler.renderAllTemplates(CLIENTS);

	// Calculate my age
	$('#my-age').text(getAge(BIRTHDATE));
});
