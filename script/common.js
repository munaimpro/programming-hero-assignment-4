// Function to filter and count total job according to job status
function getJobCount() {
    return {
        totalJob: jobs.length,
        interviewJob: jobs.filter(j => j.status == 'interview').length,
        rejectedJob: jobs.filter(j => j.status == 'rejected').length,
    };
}


// Function to change active tab button
function changeActiveTabButton(id) {
    document.getElementById(id).classList.add('btn-primary', 'shadow-none', 'bg-[#3B82F6]', 'text-[#ffffff]', 'border-[#3B82F6]');
    document.getElementById(id).classList.remove('bg-white', 'hover:text-[#3B82F6]');

    if (id == 'all-tab') {
        document.getElementById('interview-tab').classList.remove('btn-primary', 'bg-[#3B82F6]', 'text-[#ffffff]', 'border-[#3B82F6]');
        document.getElementById('interview-tab').classList.add('bg-base-100');
        document.getElementById('rejected-tab').classList.remove('btn-primary', 'bg-[#3B82F6]', 'text-[#ffffff]', 'border-[#3B82F6]');
        document.getElementById('rejected-tab').classList.add('bg-base-100');
    } else if (id == 'interview-tab') {
        document.getElementById('all-tab').classList.remove('btn-primary', 'bg-[#3B82F6]', 'text-[#ffffff]', 'border-[#3B82F6]');
        document.getElementById('all-tab').classList.add('bg-base-100');
        document.getElementById('rejected-tab').classList.remove('btn-primary', 'bg-[#3B82F6]', 'text-[#ffffff]', 'border-[#3B82F6]');
        document.getElementById('rejected-tab').classList.add('bg-base-100');
    } else {
        document.getElementById('all-tab').classList.remove('btn-primary', 'bg-[#3B82F6]', 'text-[#ffffff]', 'border-[#3B82F6]');
        document.getElementById('all-tab').classList.add('bg-base-100');
        document.getElementById('interview-tab').classList.remove('btn-primary', 'bg-[#3B82F6]', 'text-[#ffffff]', 'border-[#3B82F6]');
        document.getElementById('interview-tab').classList.add('bg-base-100');
    }
}