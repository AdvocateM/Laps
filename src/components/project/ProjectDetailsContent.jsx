import Image from 'next/image';
import React from 'react';
import projectDetails from '@/public/assets/images/project/project-details.png'
import blogDetails3 from '@/public/assets/images/blog/blog-detials3.jpg'
import Link from 'next/link';
import handleSmoothScroll from '../utilities/handleSmoothScroll';

const ProjectDetailsContent = ({ projectInfo }) => {
	const { 
		title, 
		subTitle, 
		description, 
		client, 
		startDate, 
		endDate, 
		website, 
		rating, 
		situationDescription, 
		clientGoal, 
		goalDescription, 
		goalList,
		thumb,
		secondaryThumb
	} = projectInfo;

	return (
		<>
			<div className="project-details-area section-padding">
				<div className="container">
					<div className="row g-5">
						<div className="col-lg-6 col-md-12">
							<div className="projetct-details-image rounded-4 overflow-hidden shadow">
								<Image 
									src={thumb ? thumb : projectDetails} 
									alt={title || "Project Image"} 
									width={600} 
									height={400} 
									className="w-100 h-auto"
								/>
							</div>
						</div>
						<div className="col-lg-6 col-md-12">
							<div className="info-area ps-lg-4">
								<div className="project-details-title mb-4">
									<h5 className="fw-bold text-primary">{title}</h5>
								</div>
								<div className="project-detials-discriopton mb-4">
									<p className="text-secondary">{description}</p>
								</div>
								<ul className="info list-unstyled">
									<li className="d-flex mb-3">
										<h6 className="fw-bold me-2" style={{minWidth: '100px'}}>Category <span className="text-primary">:</span></h6>
										<p className="mb-0">{subTitle}</p>
									</li>
									<li className="d-flex mb-3">
										<h6 className="fw-bold me-2" style={{minWidth: '100px'}}>Client <span className="text-primary">:</span></h6>
										<p className="mb-0">{client}</p>
									</li>
									<li className="d-flex mb-3">
										<h6 className="fw-bold me-2" style={{minWidth: '100px'}}>Start <span className="text-primary">:</span></h6>
										<p className="mb-0">{startDate}</p>
									</li>
									<li className="d-flex mb-3">
										<h6 className="fw-bold me-2" style={{minWidth: '100px'}}>End <span className="text-primary">:</span></h6>
										<p className="mb-0">{endDate}</p>
									</li>
									<li className="d-flex mb-3">
										<h6 className="fw-bold me-2" style={{minWidth: '100px'}}>Website <span className="text-primary">:</span></h6>
										<p className="mb-0">
											<Link href={`https://${website}`} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
												{website}
											</Link>
										</p>
									</li>
									<li className="d-flex mb-3">
										<h6 className="fw-bold me-2" style={{minWidth: '100px'}}>Rating <span className="text-primary">:</span></h6>
										<div className="project-rating">
											{[...Array(5)].map((_, i) => (
												<i key={i} className={i < rating ? "bi bi-star-fill text-warning me-1" : "bi bi-star text-secondary me-1"}></i>
											))}
										</div>
									</li>
								</ul>
								<div className="eulding-btn mt-4">
									<Link href="/contact" onClick={handleSmoothScroll} className='btn btn-primary px-4 py-3 rounded-pill'>
										Inquire About This Project <i className="bi bi-arrow-up-right-circle-fill ms-2"></i>
									</Link>
								</div>
							</div>
						</div>
					</div>

					<div className="row mt-5">
						<div className="col-lg-12">
							<div className="title mb-4">
								<h4 className="fw-bold text-dark border-bottom pb-3">Project Overview</h4>
							</div>
							<p className="discription text-secondary lh-lg">{situationDescription}</p>
						</div>
					</div>

					<div className="row mt-5 list-part">
						<div className="col-lg-12">
							<div className="row align-items-start g-5">
								<div className="col-lg-8 col-md-12">
									<div className="title mb-4">
										<h4 className="fw-bold text-dark border-bottom pb-3">{clientGoal}</h4>
									</div>
									<p className="discription text-secondary lh-lg mb-4">{goalDescription}</p>
									<ul className="desc-list list-unstyled">
										{goalList && goalList.map((item, index) => (
											<li key={index} className="d-flex mb-3">
												<i className="bi bi-check-circle-fill text-primary me-3 mt-1"></i>
												<p className="mb-0 text-secondary">{item}</p>
											</li>
										))}
									</ul>
								</div>
								<div className="col-lg-4 col-md-12">
									<div className="image rounded-4 overflow-hidden shadow">
										<Image 
											src={secondaryThumb ? secondaryThumb : blogDetails3} 
											alt="Project Detail" 
											width={300} 
											height={400} 
											className="w-100 h-auto"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="eulding-btn mt-5">
						<div className="col-lg-12 text-center">
							<Link href="/projects" className="btn btn-primary px-4 py-3 rounded-pill">
								<i className="bi bi-arrow-left me-2"></i> Back to All Projects
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProjectDetailsContent;