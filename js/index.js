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

$(function () {
	// Render All Certificates
	certificateHandler.renderAllTemplates(CERTIFICATES);

	// Calculate my age
	$('#my-age').text(getAge(BIRTHDATE));
});
