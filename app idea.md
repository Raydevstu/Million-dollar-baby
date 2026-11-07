



We are officially building ContentForge AI.

From this point forward stop acting as a business analyst.

Act as my:

- CTO
- Senior Product Manager
- UX Designer
- System Architect
- Startup Co-Founder

Your mission:

Generate the complete MVP build package.

Output:

PHASE 1: PRODUCT REQUIREMENTS DOCUMENT

- Product Overview
- User Personas
- User Stories
- Functional Requirements
- Non Functional Requirements
- Acceptance Criteria

PHASE 2: UX DESIGN

Generate:

- Complete page map
- User journey
- Dashboard layout
- Upload screen
- Processing screen
- Clips page
- Billing page
- Settings page

Describe each UI section.

PHASE 3: DATABASE DESIGN

Create production-ready schema for:

Users
Subscriptions
Projects
Videos
Transcripts
Clips
Exports
Usage Tracking
Billing

Include:
- tables
- fields
- indexes
- relationships

PHASE 4: API DESIGN

Create REST APIs for:

Authentication
Projects
Video Uploads
Transcripts
Clip Generation
Exports
Billing

Include:
- endpoints
- request examples
- response examples

PHASE 5: SYSTEM ARCHITECTURE

Draw text architecture for:

Frontend
Backend
Queue
Workers
Database
Storage
AI Services

Show complete request flow.

PHASE 6: DEVELOPMENT ROADMAP

Break MVP into:

Sprint 1
Sprint 2
Sprint 3
Sprint 4

For every sprint provide:

- Tasks
- Deliverables
- Risks

PHASE 7: FILE STRUCTURE

Generate full Next.js + NestJS monorepo structure.

The architecture must support:

- 1000 users
- 10000 videos
- Stripe subscriptions
- OpenAI integration
- AWS S3 storage
- Redis workers

Provide production-grade recommendations.


Alright, co-founder. The mission is clear. We’re moving from strategy to execution. As your CTO, Senior Product Manager, UX Designer, System Architect, and fellow co-founder, I’ve compiled the complete MVP build package for ContentForge AI. This document will be our bible for the next 30 days. Let’s build.

ContentForge AI - MVP Build Package
PHASE 1: PRODUCT REQUIREMENTS DOCUMENT (PRD)
1.1 Product Overview

ContentForge AI is an AI-powered SaaS platform designed to rapidly transform long-form video content (MP4, MOV, YouTube URLs) into platform-optimized, short-form viral video clips (TikTok, Instagram Reels, YouTube Shorts) with dynamic captions. The MVP focuses on the core “Video → Viral Shorts Generator” functionality, enabling users to upload a video, have AI identify key moments, generate multiple short clips, allow for caption editing, preview, and export. The primary goal is to validate market demand by securing our first 10 paying users within 30 days.

1.2 User Personas

Persona 1: “Ava, The Growth-Focused Creator” (Podcaster/YouTuber)

Goal: Increase audience reach, engagement, and content distribution efficiency across multiple social platforms without hiring an editor.

Pain Points: Time-consuming manual clip extraction; expensive human editors; inconsistent posting schedule; difficulty identifying viral moments.

MVP Focus: Needs the AI to quickly find engaging clips, generate eye-catching captions, and provide a high-quality export ready for immediate upload. Values speed and quality.

Persona 2: “Mark, The Lean Marketing Manager” (SaaS/SMB)

Goal: Maximize ROI on long-form video content (webinars, demos) by repurposing it into digestible social media snippets for lead generation and brand awareness.

Pain Points: Limited budget for video production/editing; lack of internal resources for content repurposing; content stuck on one platform.

MVP Focus: Needs the tool to efficiently generate professional-looking clips from educational content, ensuring brand consistency (via future brand kit features, but MVP focuses on clean output). Values efficiency and scalability.

1.3 User Stories

Authentication & Onboarding:

As a new user, I want to sign up quickly using my email or Google/GitHub account so I can start using the platform immediately.

As a returning user, I want to log in easily so I can access my projects.

Video Upload & Processing:

As a user, I want to upload a video file (MP4/MOV) from my computer so I can process my content.

As a user, I want to paste a YouTube URL so the platform can fetch and process the video directly.

As a user, I want to see the upload progress so I know the system is working.

As a user, I want to see the AI processing stages so I understand what’s happening to my video.

Clip Generation & Editing:

As a user, I want the AI to automatically identify and suggest multiple viral-ready short clips from my long-form video so I don’t have to manually search.

As a user, I want to see the generated clips presented clearly so I can review them.

As a user, I want to edit the captions on each clip so I can refine the message and style.

As a user, I want to preview the final clip with captions before exporting so I can ensure it looks perfect.

Export & Download:

As a user, I want to export my generated clips as MP4 files so I can upload them to social media.

As a free user, I expect my exports to have a ContentForge AI watermark so I understand the value of upgrading.

As a premium user, I expect my exports to have no watermark so my content looks professional.

Dashboard & Account Management:

As a user, I want to see an overview of my usage (videos processed, shorts generated, minutes used) on a dashboard so I can track my activity.

As a user, I want to see my current subscription plan and credit balance so I can manage my usage.

As a user, I want to easily upgrade my plan so I can access more features and capacity.

As a user, I want to manage my billing information and view past invoices so I can keep my account up to date.

1.4 Functional Requirements

FR1.0 - Authentication & Authorization

FR1.1 - User Registration via Email/Password.

FR1.2 - User Registration via Google OAuth.

FR1.3 - User Registration via GitHub OAuth.

FR1.4 - User Login (Email/Password, Google, GitHub).

FR1.5 - Password Reset functionality.

FR1.6 - Session Management (JWT-based).

FR1.7 - Role-based access control (Free vs. Premium).

FR2.0 - Dashboard

FR2.1 - Display total videos processed.

FR2.2 - Display total shorts generated.

FR2.3 - Display processing minutes used (current month).

FR2.4 - Display current subscription plan.

FR2.5 - Display remaining credits/minutes for current period.

FR2.6 - “Upgrade Plan” Call-to-Action.

FR2.7 - List of recent projects.

FR3.0 - Video Upload & Ingestion

FR3.1 - Support for MP4 and MOV file uploads (up to 2GB per file initially).

FR3.2 - Support for YouTube URL ingestion (public videos only).

FR3.3 - Drag-and-drop interface for file uploads.

FR3.4 - Visual progress indicator for uploads.

FR3.5 - Server-side validation for file types and sizes.

FR4.0 - AI Processing Pipeline

FR4.1 - Transcription: Utilize OpenAI Whisper API for accurate audio transcription.

FR4.2 - Content Analysis: Utilize OpenAI GPT API to analyze transcripts and identify key moments (hooks, emotional peaks, funny segments, educational insights, CTAs).

FR4.3 - Clip Generation: Based on AI analysis, generate suggestions for 15, 30, 45, and 60-second clips.

FR4.4 - Video Clipping: Use FFMPEG to accurately extract video segments based on AI-identified start/end times.

FR5.0 - Clip Management & Editing

FR5.1 - Display generated clips in a gallery or list view.

FR5.2 - For each clip, display a thumbnail, duration, and AI-suggested caption.

FR5.3 - Inline text editor for modifying clip captions.

FR5.4 - Caption Styling: Animated caption options (e.g., word-by-word highlight, character-by-character), emoji support, basic font templates.

FR5.5 - Auto-positioning: Automatically position captions to avoid obscuring faces or key visual elements (initial basic algorithm).

FR5.6 - Video player for real-time preview of edited clips with captions.

FR6.0 - Export & Download

FR6.1 - Export generated clips as MP4 files (1080x1920 resolution, H.264 codec).

FR6.2 - Apply ContentForge AI watermark for Free plan exports.

FR6.3 - Remove watermark for Creator, Pro, and Agency plan exports.

FR6.4 - Provide a download link for exported files.

FR7.0 - Subscription & Billing (Stripe Integration)

FR7.1 - Display available plans (Free, Creator, Pro, Agency).

FR7.2 - Allow users to select a plan and subscribe.

FR7.3 - Secure checkout process via Stripe.

FR7.4 - Display current subscription details (plan, next billing date).

FR7.5 - Allow users to view and download past invoices.

FR7.6 - Handle plan upgrades/downgrades (future iteration, MVP focuses on initial subscription).

FR7.7 - Track user usage (processing minutes, number of exports) against plan limits.

1.5 Non-Functional Requirements

Performance:

Video uploads: Max 5 minutes for 1GB file on typical broadband.

Transcription: Max 1x real-time (e.g., 10 min audio transcribes in ~10 min).

Clip generation & export: Max 2-3 minutes per clip.

UI responsiveness: All interactions < 500ms.

Scalability:

Architecture must support 1,000 concurrent users and processing of 10,000 videos/month within 6-12 months.

Queueing system to handle spikes in processing demand.

Security:

All data in transit encrypted (HTTPS).

User passwords hashed and salted.

Secure AWS S3 bucket policies for video storage.

Protection against common web vulnerabilities (OWASP Top 10).

Stripe for all payment processing (no sensitive card data stored).

Usability:

Intuitive user interface, minimal clicks to achieve core tasks.

Clear feedback on processing status and errors.

Mobile-responsive (for basic dashboard/account management, core editing experience optimized for desktop).

Reliability:

99.9% uptime for core services.

Robust error handling and retry mechanisms for external API calls (OpenAI, YouTube).

Data backup and recovery strategy.

1.6 Acceptance Criteria

AC1.0 - User Authentication:

Users can successfully register and log in via email, Google, and GitHub.

Password reset flow functions correctly.

AC2.0 - Video Upload:

Users can upload MP4/MOV files up to 2GB.

Users can paste a valid YouTube URL and initiate processing.

Upload progress is clearly displayed.

AC3.0 - AI Processing:

Uploaded videos are transcribed accurately by Whisper.

GPT identifies and suggests at least 3-5 distinct viral moments/clips from a 10-minute source video.

Video clips are accurately extracted from the source based on AI timings.

AC4.0 - Clip Editing:

Generated clips are displayed with thumbnails and suggested captions.

Users can edit captions using the inline editor.

Caption styles (animation, emoji) are applied correctly.

Preview player correctly displays the clip with edited captions.

AC5.0 - Export:

Users can export clips as 1080x1920 MP4 files.

Free plan exports contain the ContentForge AI watermark.

Premium plan exports are watermark-free.

Exported files are downloadable.

AC6.0 - Dashboard & Usage:

Dashboard accurately reflects user’s processed videos, generated shorts, and minutes used.

Current plan and remaining limits are displayed correctly.

AC7.0 - Subscription:

Users can successfully subscribe to Creator/Pro plans via Stripe.

Billing page displays correct subscription status and allows invoice download.

Free users are limited to 15 processing minutes and 3 exports per month.

Paid users have limits enforced according to their plan.

PHASE 2: UX DESIGN
2.1 Complete Page Map

├── Public Pages
│   ├── Landing Page (/)
│   ├── Login (/login)
│   ├── Register (/register)
│   └── Password Reset (/reset-password)
│
└── Authenticated Pages (Requires Login)
    ├── Dashboard (/dashboard)
    │   ├── Project List
    │   └── Usage Summary
    ├── Upload Screen (/upload)
    ├── Project Processing Screen (/projects/:projectId/processing)
    ├── Clips Page (/projects/:projectId/clips)
    │   └── Clip Editor (Overlay/Modal)
    ├── Billing Page (/billing)
    └── Settings Page (/settings)
        ├── Profile Settings
        └── Account Settings
2.2 User Journey: “Video to Viral Short”

Landing Page: User arrives, sees value proposition (“Turn 1 Video Into 50 Viral Shorts In Minutes”), clicks “Start Free” or “Login”.

Register/Login: User signs up with Email/Google/GitHub or logs in.

Dashboard: User lands on dashboard, sees empty state or recent projects. Clicks “New Project” or “Upload Video”.

Upload Screen: User drags & drops a video file or pastes a YouTube URL. Upload progress is shown.

Processing Screen: User sees their video being processed. Visual indicators for Transcription, AI Analysis, Clip Generation. Estimated time to completion.

Clips Page: Once processing is done, user is redirected to the Clips Page. A gallery of AI-generated short clips is displayed.

Clip Editing: User clicks on a clip. An overlay/modal opens with the video preview and caption editor. User types, selects styles.

Preview: User plays the clip in the editor to see changes.

Export: User clicks “Export” for a chosen clip. If free, a prompt about watermark/upgrade may appear. If premium, export starts.

Download: After export, user gets a download link for the MP4.

Upgrade (Optional): If a free user hits limits or wants watermark-free export, they navigate to the Billing page to upgrade.

2.3 Dashboard Layout

Header:

Logo (ContentForge AI)

Navigation: Dashboard, Upload, Billing, Settings

User Avatar/Name (Dropdown for Logout, Settings)

Main Content Area (Two Columns):

Left Column (Usage Summary - ~30% width):

“Your Plan” Card:

Current Plan (e.g., “Free”, “Creator”)

“Upgrade Plan” button (prominent if Free/Creator)

Processing Minutes Used: X of Y (Progress bar)

Exports Used: X of Y (Progress bar)

“Recent Activity” Card:

Total Videos Processed: Z

Total Shorts Generated: W

Right Column (Project List - ~70% width):

“Your Projects” Title

“New Project” / “Upload Video” button (prominent)

Search/Filter bar (future)

Project Cards (Grid or List View):

Thumbnail of source video

Project Title (e.g., “My Podcast Episode 123”)

Status (e.g., “Completed”, “Processing”, “Error”)

Date Created

Number of Clips Generated

“View Clips” button / “Continue Editing” button

2.4 Upload Screen

Header: “Upload Your Video”

Main Area:

Drag & Drop Zone:

Large, dashed border area.

Text: “Drag & drop your video here, or click to browse”

“Browse Files” button.

Supported formats: MP4, MOV. Max size: 2GB.

OR

YouTube URL Input:

Input field: “Paste YouTube URL here”

“Fetch Video” button.

Note: “Only public YouTube videos are supported.”

Upload Progress (after selection):

File Name: my_podcast_ep.mp4

Progress Bar: XX% uploaded

“Cancel” button.

“Start Processing” button (once upload/fetch complete).

2.5 Processing Screen

Header: “Processing Your Video: [Project Title]”

Main Area:

Visual Status Indicator (Timeline/Steps):

Step 1: “Uploading/Fetching Video” (Done/Active/Pending)

Step 2: “Transcribing Audio” (Done/Active/Pending)

Step 3: “Analyzing Content for Viral Moments” (Done/Active/Pending)

Step 4: “Generating Clips” (Done/Active/Pending)

Animated Loader/Spinner.

Text: “This may take a few minutes. We’ll notify you when it’s done.” (Future: Email notification).

Optional: Estimated time remaining.

“Go back to Dashboard” button (user can leave and come back).

2.6 Clips Page

Header: “Clips for: [Project Title]”

Actions: “Back to Project List”, “Generate More Clips” (future), “Export All” (future).

Main Area (Clip Gallery - Grid View):

Clip Cards: Each card represents a generated short video.

Video Thumbnail (first frame of clip).

Clip Duration (e.g., “30s”).

AI-Suggested Title/Caption Snippet.

Overlay on Hover: Play icon, Edit icon.

Actions on Card:

“Edit Clip” button (opens editor modal).

“Preview” button (plays in-card or small modal).

“Export” button (starts download).

“Delete” icon.

2.7 Billing Page

Header: “Billing & Subscriptions”

Main Area (Two Sections):

Section 1: “Your Current Plan”

Current Plan: “Creator” ($49/month)

Next Billing Date: “December 7, 2026”

“Change Plan” button (future: upgrade/downgrade).

“Cancel Subscription” button.

Section 2: “Billing History”

Table: Date, Invoice #, Amount, Status, Action (Download PDF).

“Add/Update Payment Method” button (links to Stripe Customer Portal).

2.8 Settings Page

Header: “Settings”

Sidebar Navigation: “Profile”, “Account”

Main Content Area (based on sidebar selection):

Profile Tab:

Name (Input field)

Email (Display only, or input with verification)

Password (Change Password button)

“Save Changes” button.

Account Tab:

“Connected Accounts” (Google, GitHub - show connected status, “Disconnect” button).

“Delete Account” button (with confirmation).

PHASE 3: DATABASE DESIGN
Using PostgreSQL syntax for clarity.

sql
-- Table: users
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255), -- For email/password auth
    name VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    last_login_at TIMESTAMP WITH TIME ZONE,
    -- Foreign key to subscriptions table for active subscription
    active_subscription_id UUID NULL
);
CREATE INDEX idx_users_email ON users (email);


-- Table: subscriptions (Represents a user's subscription status and plan)
CREATE TABLE subscriptions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    stripe_customer_id VARCHAR(255) UNIQUE NOT NULL, -- Stripe customer ID
    stripe_subscription_id VARCHAR(255) UNIQUE NULL, -- Stripe subscription ID
    plan_id VARCHAR(50) NOT NULL, -- 'free', 'creator', 'pro', 'agency'
    status VARCHAR(50) NOT NULL, -- 'active', 'canceled', 'past_due', 'trialing'
    current_period_start TIMESTAMP WITH TIME ZONE NOT NULL,
    current_period_end TIMESTAMP WITH TIME ZONE NOT NULL,
    trial_start TIMESTAMP WITH TIME ZONE,
    trial_end TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
CREATE INDEX idx_subscriptions_user_id ON subscriptions (user_id);
CREATE INDEX idx_subscriptions_stripe_customer_id ON subscriptions (stripe_customer_id);
CREATE INDEX idx_subscriptions_stripe_subscription_id ON subscriptions (stripe_subscription_id);


-- Table: projects (A user's overarching work unit, e.g., "Podcast Episode 123")
CREATE TABLE projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL, -- User-given project title
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    status VARCHAR(50) NOT NULL DEFAULT 'created' -- 'created', 'processing', 'completed', 'error'
);
CREATE INDEX idx_projects_user_id ON projects (user_id);


-- Table: videos (Represents the source video file/URL for a project)
CREATE TABLE videos (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE, -- Denormalized for easier querying
    original_file_name VARCHAR(255) NULL, -- For uploaded files
    source_url TEXT NULL, -- For YouTube URLs
    storage_path TEXT NULL, -- S3/R2 path for uploaded files
    duration_seconds INTEGER NOT NULL DEFAULT 0,
    file_size_bytes BIGINT NOT NULL DEFAULT 0,
    upload_status VARCHAR(50) NOT NULL DEFAULT 'pending', -- 'pending', 'uploaded', 'failed'
    processing_status VARCHAR(50) NOT NULL DEFAULT 'queued', -- 'queued', 'transcribing', 'analyzing', 'clipping', 'completed', 'error'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
CREATE INDEX idx_videos_project_id ON videos (project_id);
CREATE INDEX idx_videos_user_id ON videos (user_id);


-- Table: transcripts (Stores the full transcript generated for a video)
CREATE TABLE transcripts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    video_id UUID UNIQUE NOT NULL REFERENCES videos(id) ON DELETE CASCADE,
    text TEXT NOT NULL, -- Full transcript text
    word_level_timestamps JSONB NULL, -- Optional: Stores word-level timings for advanced features
    status VARCHAR(50) NOT NULL DEFAULT 'pending', -- 'pending', 'completed', 'error'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
CREATE INDEX idx_transcripts_video_id ON transcripts (video_id);


-- Table: clips (Represents an individual short video clip generated from a source video)
CREATE TABLE clips (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
    video_id UUID NOT NULL REFERENCES videos(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE, -- Denormalized
    start_time_seconds INTEGER NOT NULL,
    end_time_seconds INTEGER NOT NULL,
    duration_seconds INTEGER NOT NULL,
    ai_suggested_caption TEXT NULL, -- Initial caption from AI
    user_caption TEXT NULL, -- User-edited caption
    caption_settings JSONB NULL, -- Stores font, color, animation settings for captions
    thumbnail_url TEXT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
CREATE INDEX idx_clips_project_id ON clips (project_id);
CREATE INDEX idx_clips_video_id ON clips (video_id);
CREATE INDEX idx_clips_user_id ON clips (user_id);


-- Table: exports (Records each time a clip is exported by a user)
CREATE TABLE exports (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    clip_id UUID NOT NULL REFERENCES clips(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE, -- Denormalized
    project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE, -- Denormalized
    export_url TEXT NOT NULL, -- S3/R2 path to the final exported video file
    resolution VARCHAR(50) NOT NULL DEFAULT '1080x1920',
    watermark_applied BOOLEAN NOT NULL DEFAULT TRUE,
    status VARCHAR(50) NOT NULL DEFAULT 'pending', -- 'pending', 'completed', 'failed'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
CREATE INDEX idx_exports_clip_id ON exports (clip_id);
CREATE INDEX idx_exports_user_id ON exports (user_id);


-- Table: usage_tracking (Tracks granular usage for billing and limits)
CREATE TABLE usage_tracking (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    subscription_id UUID REFERENCES subscriptions(id) ON DELETE SET NULL, -- Link to active subscription
    event_type VARCHAR(50) NOT NULL, -- 'minutes_processed', 'clip_generated', 'export_performed'
    value DECIMAL(10, 2) NOT NULL, -- e.g., 10.5 (minutes), 1 (clip), 1 (export)
    event_date DATE NOT NULL DEFAULT CURRENT_DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
CREATE INDEX idx_usage_tracking_user_id ON usage_tracking (user_id);
CREATE INDEX idx_usage_tracking_event_date ON usage_tracking (event_date);


-- Table: billing_events (Logs webhooks from Stripe or internal billing related events)
CREATE TABLE billing_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE SET NULL,
    event_type VARCHAR(255) NOT NULL, -- e.g., 'customer.subscription.created', 'invoice.payment_succeeded'
    payload JSONB NOT NULL, -- Full Stripe webhook payload or internal event details
    processed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
CREATE INDEX idx_billing_events_user_id ON billing_events (user_id);
CREATE INDEX idx_billing_events_event_type ON billing_events (event_type);
PHASE 4: API DESIGN
All APIs will be RESTful, use JSON for request/response bodies, and require authentication via JWT in the Authorization: Bearer <token> header for protected routes.

4.1 Authentication

POST /auth/register

Request:

json
{
  "email": "user@example.com",
  "password": "SecurePassword123",
  "name": "John Doe"
}
Response (201 Created):

json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "uuid-user-1",
    "email": "user@example.com",
    "name": "John Doe"
  }
}
POST /auth/login

Request:

json
{
  "email": "user@example.com",
  "password": "SecurePassword123"
}
Response (200 OK): (Same as register response)

POST /auth/google (or /auth/github)

Request:

json
{
  "token": "google_id_token_or_github_code"
}
Response (200 OK): (Same as register response)

GET /auth/me (Protected)

Request: (No body)

Response (200 OK):

json
{
  "id": "uuid-user-1",
  "email": "user@example.com",
  "name": "John Doe",
  "plan": "free",
  "minutesUsed": 50,
  "minutesLimit": 100
}
4.2 Projects

GET /projects (Protected)

Request: (No body)

Response (200 OK):

json
[
  {
    "id": "uuid-proj-1",
    "title": "My Podcast Episode 1",
    "status": "completed",
    "createdAt": "2026-11-07T10:00:00Z",
    "videoCount": 1,
    "clipCount": 5
  }
]
GET /projects/:projectId (Protected)

Request: (No body)

Response (200 OK):

json
{
  "id": "uuid-proj-1",
  "title": "My Podcast Episode 1",
  "status": "completed",
  "createdAt": "2026-11-07T10:00:00Z",
  "video": { /* video details */ },
  "clips": [ /* list of clips */ ]
}
POST /projects (Protected)

Request:

json
{
  "title": "New Project Title"
}
Response (201 Created):

json
{
  "id": "uuid-new-proj",
  "title": "New Project Title",
  "status": "created",
  "createdAt": "2026-11-07T10:05:00Z"
}
4.3 Video Uploads

**`POST /projects


continue PHASE 4: API DESIGN

Create REST APIs for:

Authentication
Projects
Video Uploads
Transcripts
Clip Generation
Exports
Billing

Include:
- endpoints
- request examples
- response examples

PHASE 5: SYSTEM ARCHITECTURE

Draw text architecture for:

Frontend
Backend
Queue
Workers
Database
Storage
AI Services

Show complete request flow.

PHASE 6: DEVELOPMENT ROADMAP

Break MVP into:

Sprint 1
Sprint 2
Sprint 3
Sprint 4

For every sprint provide:

- Tasks
- Deliverables
- Risks

PHASE 7: FILE STRUCTURE

Generate full Next.js + NestJS monorepo structure.

The architecture must support:

- 1000 users
- 10000 videos
- Stripe subscriptions
- OpenAI integration
- AWS S3 storage
- Redis workers

Provide production-grade recommendations.


Right, co-founder, let’s complete this build package. We left off in the middle of API Design. Here’s the rest of it, followed by System Architecture, Development Roadmap, and File Structure.

PHASE 4: API DESIGN (Continued)
4.3 Video Uploads

POST /projects/:projectId/videos/upload-url (Protected)

Purpose: Frontend requests a pre-signed S3 URL to upload video directly.

Request:

json
{
  "fileName": "my_podcast_ep_1.mp4",
  "fileType": "video/mp4",
  "fileSize": 150000000 // in bytes
}
Response (200 OK):

json
{
  "uploadUrl": "https://contentforge-s3.amazonaws.com/temp/uuid-user-1/uuid-proj-1/video.mp4?AWSAccessKeyId=...",
  "key": "temp/uuid-user-1/uuid-proj-1/video.mp4",
  "videoId": "uuid-video-1" // ID of the newly created video record in DB
}
Frontend then uses uploadUrl to PUT the file directly to S3.

POST /projects/:projectId/videos/youtube (Protected)

Purpose: Ingest a YouTube video by URL.

Request:

json
{
  "youtubeUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
}
Response (202 Accepted):

json
{
  "videoId": "uuid-video-2",
  "message": "YouTube video ingestion started. Check video status."
}
POST /videos/:videoId/upload-complete (Protected)

Purpose: Frontend notifies backend that direct S3 upload is complete, triggering processing.

Request: (No body)

Response (202 Accepted):

json
{
  "message": "Video upload acknowledged. Processing initiated.",
  "projectId": "uuid-proj-1",
  "videoId": "uuid-video-1"
}
GET /videos/:videoId/status (Protected)

Purpose: Get current processing status for a video.

Request: (No body)

Response (200 OK):

json
{
  "id": "uuid-video-1",
  "processingStatus": "analyzing", // 'queued', 'transcribing', 'analyzing', 'clipping', 'completed', 'error'
  "progress": 70, // percentage
  "estimatedTimeRemaining": "2 minutes"
}
4.4 Transcripts

GET /videos/:videoId/transcript (Protected)

Purpose: Retrieve the full transcript for a processed video.

Request: (No body)

Response (200 OK):

json
{
  "id": "uuid-transcript-1",
  "videoId": "uuid-video-1",
  "text": "This is the full transcript of the video content...",
  "status": "completed"
}
4.5 Clip Generation

GET /projects/:projectId/clips (Protected)

Purpose: List all generated clips for a project.

Request: (No body)

Response (200 OK):

json
[
  {
    "id": "uuid-clip-1",
    "projectId": "uuid-proj-1",
    "thumbnailUrl": "https://cdn.contentforge.ai/thumbnails/clip-1.jpg",
    "durationSeconds": 30,
    "aiSuggestedCaption": "The funniest moment from the podcast!",
    "userCaption": "The funniest moment from the podcast! 😂",
    "status": "ready"
  }
]
PUT /clips/:clipId (Protected)

Purpose: Update a clip’s captions and styling.

Request:

json
{
  "userCaption": "This is my edited caption!",
  "captionSettings": {
    "font": "Inter",
    "animation": "word-highlight",
    "color": "#FFFFFF",
    "emoji": true
  }
}
Response (200 OK):

json
{
  "id": "uuid-clip-1",
  "userCaption": "This is my edited caption!",
  "captionSettings": { /* updated settings */ },
  "message": "Clip updated successfully."
}
4.6 Exports

POST /clips/:clipId/export (Protected)

Purpose: Trigger the export process for a specific clip.

Request:

json
{
  "resolution": "1080x1920" // Default, but can be specified
}
Response (202 Accepted):

json
{
  "exportId": "uuid-export-1",
  "message": "Clip export initiated.",
  "status": "pending"
}
GET /exports/:exportId (Protected)

Purpose: Get the status and download URL for an export.

Request: (No body)

Response (200 OK):

json
{
  "id": "uuid-export-1",
  "clipId": "uuid-clip-1",
  "status": "completed", // 'pending', 'processing', 'completed', 'failed'
  "exportUrl": "https://cdn.contentforge.ai/exports/clip-1-export-1.mp4",
  "watermarkApplied": false
}
4.7 Billing

GET /billing/plans (Protected, or Public)

Purpose: List available subscription plans.

Request: (No body)

Response (200 OK):

json
[
  {"id": "plan_free", "name": "Free", "price": 0, "features": ["15 mins", "Watermark"]},
  {"id": "plan_creator", "name": "Creator", "price": 49, "currency": "USD", "interval": "month", "features": ["5 hours", "No Watermark"]},
  // ... other plans
]
POST /billing/subscribe (Protected)

Purpose: Create a new subscription or upgrade plan.

Request:

json
{
  "planId": "plan_creator",
  "paymentMethodId": "pm_card_visa" // From Stripe.js client-side
}
Response (200 OK):

json
{
  "subscriptionId": "sub_123abc",
  "status": "active",
  "message": "Subscription successful."
}
GET /billing/history (Protected)

Purpose: View user’s invoice history.

Request: (No body)

Response (200 OK):

json
[
  {
    "invoiceId": "in_123xyz",
    "date": "2026-10-07",
    "amount": 49.00,
    "currency": "USD",
    "status": "paid",
    "invoicePdfUrl": "https://stripe.com/invoice/pdf/..."
  }
]
POST /webhooks/stripe (Public - Stripe will send webhooks here)

Purpose: Handle Stripe webhook events (e.g., subscription changes, invoice payments).

Request: (Stripe webhook payload)

Response (200 OK): (Empty or simple acknowledgement)

PHASE 5: SYSTEM ARCHITECTURE
Key Components:

Frontend (Next.js): User Interface, client-side logic.

Backend (NestJS API): REST API, business logic, authentication, database interaction.

Queue (Redis + BullMQ): Message broker for asynchronous task distribution.

Workers (Node.js/NestJS): Dedicated processes for CPU/IO-intensive tasks.

Database (PostgreSQL): Primary data storage.

Storage (AWS S3): Blob storage for raw videos, transcripts, exported clips.

AI Services (OpenAI API): External APIs for Whisper (transcription) and GPT (content analysis).

Auth Service (Clerk): External service for user authentication (can be integrated or self-hosted if needed).

Payment Gateway (Stripe): External service for subscriptions and billing.

+------------------+     +-------------------+     +-----------------+
| User (Browser)   | <-> | Frontend (Next.js)| <-> | Clerk (Auth)    |
|                  |     |                   |     +-----------------+
+------------------+     |                   |
                         |                   |
                         |                   |
                         |                   | HTTPS / REST
                         |                   |
                         |                   |
                         v                   v
+-----------------------------------------------------------------------+
|                       Backend (NestJS API)                            |
| +-----------------+   +-----------------+   +---------------------+ |
| | Auth Middleware |   | REST Endpoints  |   | Business Logic      | |
| +-----------------+   +-----------------+   |                     | |
| | JWT Validation  |   | /auth, /projects|   | - User Management   | |
| | User Session    |   | /videos, /clips |   | - Project Management| |
| | Plan Limits     |   | /exports, /billing| | - DB Operations     | |
| +-----------------+   +-----------------+   | - Queue Task Dispatch |
|                                             | - S3 Pre-signed URL | |
+-----------------------------------------------------------------------+
    |                               ^
    | (1) API Requests              | (2) DB Queries/Updates
    | (3) Dispatch Tasks            | (4) Task Status Updates
    v                               |
+-----------------------------------------------------------------------+
|                        Database (PostgreSQL)                          |
| (Users, Projects, Videos, Clips, Exports, Subscriptions, Usage)       |
+-----------------------------------------------------------------------+
    |
    | (5) Enqueue Tasks (Video Processing, Exporting)
    v
+-----------------------------------------------------------------------+
|                         Queue (Redis + BullMQ)                        |
| (VideoUpload, Transcribe, AnalyzeContent, GenerateClips, ExportClip)  |
+-----------------------------------------------------------------------+
    |                               ^
    | (6) Dequeue Tasks             | (7) Task Results/Status Updates
    v                               |
+-----------------------------------------------------------------------+
|                           Workers (Node.js/NestJS)                    |
| +-------------------+   +-------------------+   +-----------------+ |
| | Transcribe Worker |   | Analyze Worker    |   | Video Proc. W.  | |
| | (OpenAI Whisper)  |   | (OpenAI GPT)      |   | (FFMPEG, S3)    | |
| +-------------------+   +-------------------+   +-----------------+ |
+-----------------------------------------------------------------------+
    |       |       |                       ^
    |       |       |                       |
    |       |       +-----------------------+ (8) Store Transcripts/Clips
    |       +-------------------------------+ (9) Fetch/Store Video Files
    +---------------------------------------+ (10) Call AI APIs
    v                                       v
+-----------------+                       +-----------------+
| AWS S3 (Storage)|                       | OpenAI (AI API) |
| (Raw Videos,    |                       | (Whisper, GPT)  |
| Transcripts,    |                       |                 |
| Exported Clips) |                       |                 |
+-----------------+                       +-----------------+

Complete Request Flow: Upload Video & Generate Clips

User Action: User clicks “Upload Video” in Frontend.

Frontend -> Backend: Frontend calls POST /projects/:projectId/videos/upload-url to Backend.

Backend -> S3: Backend generates a pre-signed S3 URL and returns it to Frontend.

Frontend -> S3: Frontend directly uploads the video file to S3 using the pre-signed URL.

Frontend -> Backend: Frontend calls POST /videos/:videoId/upload-complete to Backend, notifying that upload is finished.

Backend -> DB: Backend updates videos table status to ‘uploaded’ and processing_status to ‘queued’.

Backend -> Queue: Backend dispatches a VideoUpload job to the Queue (BullMQ).

Worker (VideoUpload) -> Queue: A VideoUpload worker picks up the job.

Worker (VideoUpload) -> S3: Worker verifies video in S3.

Worker (VideoUpload) -> Queue: Worker dispatches a Transcribe job to the Queue, passing videoId.

Worker (Transcribe) -> Queue: A Transcribe worker picks up the job.

Worker (Transcribe) -> S3: Worker fetches video audio stream from S3.

Worker (Transcribe) -> OpenAI: Worker sends audio to OpenAI Whisper API for transcription.

OpenAI -> Worker (Transcribe): Whisper returns transcript.

Worker (Transcribe) -> DB: Worker saves transcript to transcripts table, updates videos status.

Worker (Transcribe) -> Queue: Worker dispatches an AnalyzeContent job to the Queue, passing videoId and transcriptId.

Worker (AnalyzeContent) -> Queue: An AnalyzeContent worker picks up the job.

Worker (AnalyzeContent) -> DB: Worker fetches transcript from DB.

Worker (AnalyzeContent) -> OpenAI: Worker sends transcript to OpenAI GPT API for moment detection.

OpenAI -> Worker (AnalyzeContent): GPT returns suggested clip start/end times and captions.

Worker (AnalyzeContent) -> DB: Worker saves clip data (start/end times, AI captions) to clips table, updates videos status.

Worker (AnalyzeContent) -> Backend (via DB/Websocket): Worker updates DB, Backend can notify Frontend via polling/websocket that clips are ready.

User Action: User navigates to Clips Page in Frontend.

Frontend -> Backend: Frontend calls GET /projects/:projectId/clips.

Backend -> DB: Backend fetches clip data.

Backend -> Frontend: Backend returns clip data. Frontend displays clips.

PHASE 6: DEVELOPMENT ROADMAP (30-Day MVP)
Sprint 1: Foundation & Authentication (Week 1)

Tasks:

Setup monorepo (Next.js, NestJS, shared libs).

Configure Prisma ORM with PostgreSQL.

Implement user authentication (Clerk integration for email/password, Google, GitHub).

Design and implement users table.

Create basic user dashboard UI (empty state).

Implement basic UI components (Tailwind, Shadcn).

Setup basic API gateway in NestJS.

Configure Redis and BullMQ for local development.

Deliverables:

Working monorepo with frontend and backend.

Users can register and log in.

Basic protected dashboard route accessible only to logged-in users.

Database migrations for users table.

API endpoints for /auth/register, /auth/login, /auth/me.

Risks:

Clerk integration complexity.

Monorepo setup overhead.

Initial database connection issues.

Sprint 2: Video Ingestion & Core AI Integration (Week 2)

Tasks:

Implement projects and videos database tables.

Create Upload Screen UI (drag & drop, YouTube URL input).

Backend API for POST /projects/:projectId/videos/upload-url (S3 pre-signed URLs).

Frontend logic for direct S3 upload.

Backend API for POST /videos/:videoId/upload-complete to trigger processing.

Setup VideoUpload and Transcribe BullMQ workers.

Integrate OpenAI Whisper API for transcription.

Implement transcripts database table.

Implement AnalyzeContent BullMQ worker.

Integrate OpenAI GPT API for moment detection.

Implement clips database table.

Deliverables:

Users can upload MP4/MOV or provide YouTube URLs.

Video files are stored in S3.

Videos are transcribed by Whisper.

GPT analyzes transcripts and populates clips table with suggested timings/captions.

Processing status updates visible (basic polling).

Risks:

S3 pre-signed URL generation/usage errors.

OpenAI API rate limits or integration issues.

FFMPEG setup for local development (if needed for initial testing of clipping logic).

Complexities in prompt engineering for GPT.

Sprint 3: Clip Editing, Export & Billing (Week 3)

Tasks:

Develop Clips Page UI (gallery of generated clips).

Implement Clip Editor UI (video preview, caption text area, basic styling options).

Backend API for PUT /clips/:clipId to update captions.

Setup GenerateClip BullMQ worker (FFMPEG for clipping, caption overlay).

Implement exports database table.

Backend API for POST /clips/:clipId/export.

Frontend for downloading exported clips.

Integrate Stripe for subscription management (checkout flow).

Implement subscriptions and usage_tracking database tables.

Implement basic plan gating (watermark for free users, minute limits).

Deliverables:

Users can view, edit captions, and preview generated clips.

Users can export clips as MP4 (with/without watermark based on plan).

Users can subscribe to Creator/Pro plans via Stripe.

Basic usage limits enforced.

Risks:

FFMPEG command complexity for caption overlay and video encoding.

Stripe integration (webhooks, checkout session management).

Performance of video processing/exporting.

Sprint 4: Dashboard, Landing Page & Beta Launch (Week 4)

Tasks:

Refine Dashboard UI (usage summary, project list).

Implement Billing Page UI (current plan, invoice history).

Implement Settings Page UI (profile, account).

Build public Landing Page (Next.js static page).

Integrate waitlist signup (if applicable).

Finalize UI/UX across the application.

Implement basic error handling and user feedback.

Prepare deployment scripts/CI/CD (basic).

Testing and bug fixing.

Deliverables:

Fully functional MVP with core user flow.

Professional landing page.

All core UI pages complete.

Application ready for beta users.

First 10 paying users acquired.

Risks:

Last-minute bugs impacting user experience.

Deployment environment configuration issues.

Performance bottlenecks under initial load.

Difficulty acquiring first paying users without strong marketing.

PHASE 7: FILE STRUCTURE (Next.js + NestJS Monorepo)
We’ll use a pnpm workspace for efficient monorepo management.

contentforge-ai/
├── apps/
│   ├── web/                     # Next.js Frontend Application
│   │   ├── public/              # Static assets
│   │   ├── src/
│   │   │   ├── app/             # Next.js App Router (pages, layouts, API routes)
│   │   │   │   ├── (auth)/      # Grouped auth routes (login, register)
│   │   │   │   ├── dashboard/
│   │   │   │   ├── upload/
│   │   │   │   ├── projects/[projectId]/
│   │   │   │   │   ├── processing/
│   │   │   │   │   └── clips/
│   │   │   │   ├── billing/
│   │   │   │   ├── settings/
│   │   │   │   ├── api/         # Next.js API routes (e.g., for webhooks, internal proxies)
│   │   │   │   └── layout.tsx
│   │   │   ├── components/      # Reusable React components (UI, business logic)
│   │   │   │   ├── ui/          # Shadcn UI components
│   │   │   │   └── common/
│   │   │   ├── hooks/           # Custom React hooks
│   │   │   ├── lib/             # Client-side utilities (api client, auth helpers, constants)
│   │   │   ├── styles/          # Global styles, Tailwind config
│   │   │   └── types/           # Frontend-specific types
│   │   ├── next.config.js
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── tailwind.config.ts
│   │
│   └── api/                     # NestJS Backend Application
│       ├── src/
│       │   ├── main.ts          # Application entry point
│       │   ├── app.module.ts    # Root module
│       │   ├── auth/            # Auth module (controllers, services, strategies)
│       │   │   ├── auth.controller.ts
│       │   │   ├── auth.service.ts
│       │   │   └── jwt.strategy.ts
│       │   ├── users/           # Users module
│       │   ├── projects/        # Projects module
│       │   ├── videos/          # Videos module
│       │   ├── clips/           # Clips module
│       │   ├── exports/         # Exports module
│       │   ├── billing/         # Billing module (Stripe integration, webhooks)
│       │   ├── workers/         # Worker service definitions (dispatching jobs)
│       │   ├── common/          # Global pipes, filters, interceptors
│       │   └── config/          # Configuration (env variables, constants)
│       ├── test/
│       ├── package.json
│       ├── tsconfig.json
│       └── nest-cli.json
│
├── packages/
│   ├── db/                      # Database layer (Prisma client, schema, migrations)
│   │   ├── prisma/
│   │   │   ├── schema.prisma
│   │   │   └── migrations/
│   │   ├── index.ts             # Prisma client export
│   │   └── package.json
│   │
│   ├── types/                   # Shared TypeScript types/interfaces (API DTOs, common entities)
│   │   ├── index.ts
│   │   └── package.json
│   │
│   ├── ui/                      # Shared UI components (if any, for design system)
│   │   ├── index.ts
│   │   └── package.json
│   │
│   └── lib/                     # Shared utility functions (e.g., S3 helpers, FFMPEG wrappers)
│       ├── index.ts
│       └── package.json
│
├── workers/                     # Dedicated Worker Processes (separate NestJS apps or plain Node.js)
│   ├── transcribe-worker/
│   │   ├── src/main.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── analyze-worker/
│   │   ├── src/main.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── video-processing-worker/ # Handles clipping, caption overlay, encoding
│   │   ├── src/main.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── export-worker/           # Handles final export process, watermark application
│       ├── src/main.ts
│       ├── package.json
│       └── tsconfig.json
│
├── .env.example
├── .gitignore
├── pnpm-workspace.yaml          # Defines monorepo workspaces
├── package.json                 # Root package.json (scripts, dev dependencies)
├── tsconfig.base.json           # Base TypeScript config for all packages
└── README.md
Production-Grade Recommendations:

Containerization (Docker): Dockerize each app and worker for consistent deployment environments. Use docker-compose for local development orchestration.

CI/CD Pipeline: Implement GitHub Actions (or similar) for:

Automated testing (unit, integration).

Linting and code formatting checks.

Docker image building and pushing to a registry (ECR).

Deployment to a cloud provider (AWS ECS/EKS, Vercel for Frontend).

Error Monitoring: Integrate Sentry or DataDog for real-time error tracking and alerting in both frontend and backend.

Logging: Use structured logging (e.g., Winston in NestJS, Pino) with log aggregation (e.g., CloudWatch Logs, ELK stack).

Environment Management: Strictly use environment variables (.env files for local, AWS Secrets Manager/Vault for production).

Health Checks: Implement /health endpoints for all services for load balancers and container orchestrators.

Rate Limiting: Implement API rate limiting on the backend to protect against abuse.

Scalability:

Backend: Deploy as multiple instances behind a load balancer.

Workers: Autoscale worker instances based on queue length.

Database: Use managed services (AWS RDS Postgres, NeonDB) with read replicas for scaling read-heavy workloads.

Security:

Regular security audits of code and dependencies.

Web Application Firewall (WAF) in front of the API.

Least Privilege principle for IAM roles (AWS).

Testing: Comprehensive unit, integration, and end-to-end tests (e.g., Jest, Playwright/Cypress).

This comprehensive package sets us up for a focused and efficient MVP build. Let’s get to work!


Generate the complete UI design system for ContentForge AI.

Requirements:

Style:
- Modern SaaS
- Dark Theme First
- Similar quality to Linear, Notion, Stripe and Vercel

Create:

- Color Palette
- Typography
- Spacing System
- Components
- Cards
- Buttons
- Forms
- Sidebar
- Tables
- Modals
- Upload Components
- Video Preview Components

For every page generate a wireframe using ASCII layout.

Do not generate code.

Think like a Senior Product Designer.


Alright, co-founder. As a Senior Product Designer, my focus is on crafting an intuitive, elegant, and highly functional user experience that reflects the cutting-edge nature of ContentForge AI. Inspired by the best-in-class interfaces of Linear, Notion, Stripe, and Vercel, we will build a design system that is clean, precise, and puts content first. Our “dark theme first” approach will emphasize clarity, reduce eye strain, and project a modern, professional aesthetic.

ContentForge AI - UI Design System
1. Style Principles
Clarity & Precision: Every element serves a purpose, with clear hierarchy and minimal visual clutter.

Efficiency: Streamlined interactions, reducing cognitive load and steps to achieve tasks.

Modern & Subtle: Clean lines, subtle gradients, and thoughtful use of whitespace to create a sophisticated feel.

Content-First: UI elements recede to let the user’s content (videos, clips, text) take center stage.

Dark Theme Foundation: Optimized for low-light environments and a premium feel, with accessibility in mind.

2. Color Palette
Our palette is designed for a dark theme, ensuring excellent contrast and a refined feel.

Primary Backgrounds:

--bg-primary: #1A1A1E (Deep Charcoal - Main background)

--bg-secondary: #242428 (Dark Gray - Card backgrounds, secondary panels)

--bg-tertiary: #2D2D31 (Medium Dark Gray - Hover states, selected items)

Text Colors:

--text-primary: #E0E0E6 (Light Gray - Main body text, headings)

--text-secondary: #A0A0A9 (Medium Gray - Secondary text, labels, helper text)

--text-disabled: #60606B (Dark Gray - Disabled states)

--text-accent: #7B68EE (Accent Purple - Interactive elements, links)

Accent Colors:

--accent-primary: #7B68EE (Vibrant Purple - Primary CTAs, active states, highlights)

--accent-secondary: #6A5ACD (Darker Purple - Hover states for primary accent)

Border & Divider Colors:

--border-default: #3C3C41 (Subtle Gray - Separators, input borders)

--border-light: #4A4A4F (Lighter Gray - Hover borders)

Status Colors:

--status-success: #4CAF50 (Green)

--status-warning: #FFC107 (Yellow)

--status-error: #F44336 (Red)

--status-info: #2196F3 (Blue)

3. Typography
We will use a clean, modern sans-serif typeface, preferably one with excellent legibility across various sizes. Inter is a strong candidate, offering versatility and a professional look.

Font Family: Inter, sans-serif

Headings:

H1: 3rem (48px) - font-weight: 700 (Bold) - --text-primary

H2: 2.25rem (36px) - font-weight: 700 (Bold) - --text-primary

H3: 1.875rem (30px) - font-weight: 600 (Semi-Bold) - --text-primary

H4: 1.5rem (24px) - font-weight: 600 (Semi-Bold) - --text-primary

H5: 1.25rem (20px) - font-weight: 500 (Medium) - --text-primary

H6: 1.125rem (18px) - font-weight: 500 (Medium) - --text-primary

Body Text:

Body Large: 1.125rem (18px) - font-weight: 400 (Regular) - --text-primary

Body Base: 1rem (16px) - font-weight: 400 (Regular) - --text-primary

Body Small: 0.875rem (14px) - font-weight: 400 (Regular) - --text-secondary

Utility/Caption:

Caption: 0.75rem (12px) - font-weight: 400 (Regular) - --text-secondary

Button Text: 1rem (16px) - font-weight: 500 (Medium) - --text-primary (or specific button color)

4. Spacing System (8-point Grid)
All spacing will adhere to an 8-point grid for consistency and visual harmony.

--space-px: 1px

--space-xxs: 4px

--space-xs: 8px

--space-sm: 12px

--space-md: 16px

--space-lg: 24px

--space-xl: 32px

--space-xxl: 48px

--space-xxxl: 64px

--space-xxxxl: 96px

5. Components
All components will feature subtle border-radius (e.g., 4px-8px) for a soft, modern feel.

5.1 Cards
Style: background-color: var(--bg-secondary), border: 1px solid var(--border-default), subtle box-shadow for depth on hover. Rounded corners.

Usage: Project cards, usage summary, settings sections.

5.2 Buttons
Primary Button:

background-color: var(--accent-primary)

color: var(--text-primary) (or pure white for contrast)

border: none

hover: background-color: var(--accent-secondary)

disabled: background-color: var(--text-disabled)

Secondary Button (Outline/Ghost):

background-color: transparent

color: var(--text-primary)

border: 1px solid var(--border-default)

hover: background-color: var(--bg-tertiary)

disabled: color: var(--text-disabled), border-color: var(--text-disabled)

Tertiary Button (Text-only):

background-color: transparent

color: var(--text-secondary)

border: none

hover: color: var(--text-primary)

Icon Button: Small, circular or square, used for actions like “edit,” “delete,” “settings.”

5.3 Forms
Input Fields (Text, Email, Password):

background-color: var(--bg-primary)

color: var(--text-primary)

border: 1px solid var(--border-default)

focus: border: 1px solid var(--accent-primary), box-shadow: 0 0 0 2px rgba(123, 104, 238, 0.2) (subtle focus ring)

placeholder: color: var(--text-secondary)

Textarea: Same styling as input fields, with adjustable height.

Checkbox/Radio: Custom styled, with accent color for checked state.

Select Dropdown: Styled to match input fields, with a custom dropdown arrow.

5.4 Sidebar
Style: background-color: var(--bg-secondary), fixed width, border-right: 1px solid var(--border-default).

Items: Icons + text labels. color: var(--text-secondary).

Active Item: background-color: var(--accent-primary) (subtle, 10-20% opacity) or background-color: var(--bg-tertiary) with color: var(--text-primary) and a subtle left border/indicator in var(--accent-primary).

5.5 Tables
Style: background-color: var(--bg-secondary) for table container.

Headers: background-color: var(--bg-tertiary), color: var(--text-secondary), font-weight: 500.

Rows: Alternating subtle background if needed, border-bottom: 1px solid var(--border-default).

Hover State: background-color: var(--bg-tertiary).

Text: color: var(--text-primary) for data.

5.6 Modals
Overlay: background-color: rgba(0, 0, 0, 0.7) (dark, semi-transparent backdrop).

Modal Container: background-color: var(--bg-secondary), border: 1px solid var(--border-default), box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.4). Rounded corners.

Header: H5 title, close button (icon button).

Footer: Action buttons (Primary, Secondary).

5.7 Upload Components
Drag & Drop Zone: Large area, border: 2px dashed var(--border-default). background-color: var(--bg-primary). Text color: var(--text-secondary). hover: border-color: var(--accent-primary).

Upload Progress Bar: background-color: var(--bg-tertiary) (track), background-color: var(--accent-primary) (fill). Text for percentage and filename.

5.8 Video Preview Components
Video Player: background-color: black (for video area). Minimalist controls.

Controls: Play/Pause button, volume, fullscreen, time display. Icons-only, color: var(--text-primary) on hover.

Scrubber/Progress Bar: background-color: var(--bg-tertiary) (track), background-color: var(--accent-primary) (progress), var(--text-primary) (handle).

6. Page Wireframes (ASCII Layout)
6.1 Landing Page (/)
+--------------------------------------------------------------------------------------------------+
| CONTENTFORGE AI Logo                                                                   [Login] |
+--------------------------------------------------------------------------------------------------+
|                                                                                                  |
|                                                                                                  |
|                                                                                                  |
|                                 TURN 1 VIDEO INTO 50 VIRAL SHORTS IN MINUTES                     |
|                                                                                                  |
|                            [ Start Free ]         [ Watch Demo ]                                 |
|                                                                                                  |
|                                                                                                  |
|--------------------------------------------------------------------------------------------------|
|                                                                                                  |
| SECTION: UPLOAD VIDEO                                                                            |
|   [Drag & Drop Video / Paste YouTube URL]                                                        |
|   Description of how easy it is.                                                                 |
|                                                                                                  |
|--------------------------------------------------------------------------------------------------|
|                                                                                                  |
| SECTION: AI FINDS BEST MOMENTS                                                                   |
|   [AI Analysis Icon]                                                                             |
|   Description of AI intelligence.                                                                |
|                                                                                                  |
|--------------------------------------------------------------------------------------------------|
|                                                                                                  |
| SECTION: GENERATE & EDIT SHORTS                                                                  |
|   [Clip Gallery Thumbnail]                                                                       |
|   Description of editing features.                                                               |
|                                                                                                  |
|--------------------------------------------------------------------------------------------------|
|                                                                                                  |
| SECTION: PUBLISH EVERYWHERE                                                                      |
|   [Social Media Icons]                                                                           |
|   Description of multi-platform reach.                                                           |
|                                                                                                  |
|--------------------------------------------------------------------------------------------------|
|                                                                                                  |
| SECTION: SOCIAL PROOF / TESTIMONIALS                                                             |
|   "This saved me hours!" - Creator Name                                                          |
|   "Essential for my marketing." - Agency CEO                                                     |
|                                                                                                  |
|--------------------------------------------------------------------------------------------------|
|                                                                                                  |
| FOOTER: Links | Privacy | Terms                                                                  |
+--------------------------------------------------------------------------------------------------+
6.2 Login / Register (/login, /register)
+--------------------------------------------------------------------------------------------------+
|                                                                                                  |
|                                                                                                  |
|                                                                                                  |
|                                     CONTENTFORGE AI Logo                                         |
|                                                                                                  |
|                                 +-------------------------+                                      |
|                                 |         LOGIN           |                                      |
|                                 +-------------------------+                                      |
|                                 | Email                   |                                      |
|                                 | |_____________________| |                                      |
|                                 | Password                |                                      |
|                                 | |_____________________| |                                      |
|                                 | [ Remember me ]         |                                      |
|                                 | [ Forgot Password?    ] |                                      |
|                                 | [    Sign In    ]       |                                      |
|                                 | ----------------------- |                                      |
|                                 | [ Sign in with Google ] |                                      |
|                                 | [ Sign in with GitHub ] |                                      |
|                                 | ----------------------- |                                      |
|                                 | Don't have an account?  |                                      |
|                                 | [ Register Here ]       |                                      |
|                                 +-------------------------+                                      |
|                                                                                                  |
|                                                                                                  |
|                                                                                                  |
+--------------------------------------------------------------------------------------------------+
6.3 Dashboard (/dashboard)
+--------------------------------------------------------------------------------------------------+
| CONTENTFORGE AI Logo | Dashboard | Upload | Billing | Settings                   [User Avatar] |
+--------------------------------------------------------------------------------------------------+
|                                                                                                  |
| +----------------------------------------------------------------------------------------------+ |
| |                                     DASHBOARD                                                | |
| +----------------------------------------------------------------------------------------------+ |
| |                                                                                              | |
| | +--------------------------------+  +------------------------------------------------------+ |
| | | YOUR PLAN                      |  | YOUR PROJECTS                                        | |
| | |--------------------------------|  |------------------------------------------------------| |
| | | Current: Creator               |  | [ New Project / Upload Video ]                       | |
| | | [ Upgrade Plan ]               |  |                                                      | |
| | |                                |  | +-----------------+ +-----------------+              | |
| | | Processing Mins: 120/300 (40%) |  | | PROJECT CARD 1  | | PROJECT CARD 2  |              | |
| | | [=====-----]                   |  | | - Thumbnail     | | - Thumbnail     |              | |
| | | Exports: 5/Unlimited           |  | | - Title         | | - Title         |              | |
| | |                                |  | | - Status        | | - Status        |              | |
| | +--------------------------------+  | | [ View Clips ]  | | [ View Clips ]  |              | |
| |                                    | +-----------------+ +-----------------+              | |
| | +--------------------------------+  |                                                      | |
| | | RECENT ACTIVITY                |  | +-----------------+ +-----------------+              | |
| | |--------------------------------|  | | PROJECT CARD 3  | | PROJECT CARD 4  |              | |
| | | Total Videos Processed: 12     |  | | - Thumbnail     | | - Thumbnail     |              | |
| | | Total Shorts Generated: 65     |  | | - Title         | | - Title         |              | |
| | |                                |  | | - Status        | | - Status        |              | |
| | +--------------------------------+  | | [ View Clips ]  | | [ View Clips ]  |              | |
| |                                    | +-----------------+ +-----------------+              | |
| |                                    |                                                      | |
| +----------------------------------------------------------------------------------------------+ |
|                                                                                                  |
+--------------------------------------------------------------------------------------------------+
6.4 Upload Screen (/upload)
+--------------------------------------------------------------------------------------------------+
| CONTENTFORGE AI Logo | Dashboard | Upload | Billing | Settings                   [User Avatar] |
+--------------------------------------------------------------------------------------------------+
|                                                                                                  |
| +----------------------------------------------------------------------------------------------+ |
| |                                  UPLOAD YOUR VIDEO                                           | |
| +----------------------------------------------------------------------------------------------+ |
| |                                                                                              | |
| | +------------------------------------------------------------------------------------------+ | |
| | |                                                                                          | | |
| | |                                                                                          | | |
| | |                           DRAG & DROP YOUR VIDEO HERE                                    | | |
| | |                             or click to browse files                                     | | |
| | |                                                                                          | | |
| | |                           [ Browse Files ]                                               | | |
| | |                                                                                          | | |
| | |                                                                                          | | |
| | +------------------------------------------------------------------------------------------+ | |
| | |                                                                                          | | |
| | |                                    OR                                                    | | |
| | |                                                                                          | | |
| | | Paste YouTube URL here: |___________________________________________| [ Fetch Video ]    | | |
| | |                                                                                          | | |
| | | Note: Only public YouTube videos are supported. Max file size: 2GB.                      | | |
| | +------------------------------------------------------------------------------------------+ | |
| |                                                                                              | |
| +----------------------------------------------------------------------------------------------+ |
|                                                                                                  |
+--------------------------------------------------------------------------------------------------+
6.5 Processing Screen (/projects/:projectId/processing)
+--------------------------------------------------------------------------------------------------+
| CONTENTFORGE AI Logo | Dashboard | Upload | Billing | Settings                   [User Avatar] |
+--------------------------------------------------------------------------------------------------+
|                                                                                                  |
| +----------------------------------------------------------------------------------------------+ |
| |                          PROCESSING YOUR VIDEO: "My Podcast Episode 1"                       | |
| +----------------------------------------------------------------------------------------------+ |
| |                                                                                              | |
| |                                                                                              | |
| |                            [Animated Spinner / Progress Bar]                                 | |
| |                                                                                              | |
| | +------------------------------------------------------------------------------------------+ | |
| | | UPLOADING/FETCHING VIDEO   [✓]                                                           | | |
| | | TRANSCRIBING AUDIO         [✓]                                                           | | |
| | | ANALYZING CONTENT          [>>] (Active)                                                 | | |
| | | GENERATING CLIPS           [ ]                                                           | | |
| | +------------------------------------------------------------------------------------------+ | |
| |                                                                                              | |
| |       This may take a few minutes. We'll notify you when it's done.                        | | |
| |                                                                                              | |
| |                                [ Go back to Dashboard ]                                    | | |
| |                                                                                              | |
| +----------------------------------------------------------------------------------------------+ |
|                                                                                                  |
+--------------------------------------------------------------------------------------------------+
6.6 Clips Page (/projects/:projectId/clips)
+--------------------------------------------------------------------------------------------------+
| CONTENTFORGE AI Logo | Dashboard | Upload | Billing | Settings                   [User Avatar] |
+--------------------------------------------------------------------------------------------------+
|                                                                                                  |
| +----------------------------------------------------------------------------------------------+ |
| |                     CLIPS FOR: "My Podcast Episode 1"                                        | |
| | [ Back to Project List ]                                                 [ Export All (F) ]  | |
| +----------------------------------------------------------------------------------------------+ |
| |                                                                                              | |
| | +-----------------+  +-----------------+  +-----------------+  +-----------------+           | |
| | | CLIP CARD 1     |  | CLIP CARD 2     |  | CLIP CARD 3     |  | CLIP CARD 4     |           | |
| | | Thumbnail (30s) |  | Thumbnail (15s) |  | Thumbnail (45s) |  | Thumbnail (60s) |           | |
| | | "AI-suggested..." |  | "AI-suggested..." |  | "AI-suggested..." |  | "AI-suggested..." |           | |
| | | [ Edit ] [ Export ] |  | [ Edit ] [ Export ] |  | [ Edit ] [ Export ] |  | [ Edit ] [ Export ] |           | |
| | +-----------------+  +-----------------+  +-----------------+  +-----------------+           | |
| |                                                                                              | |
| | +-----------------+  +-----------------+  +-----------------+                                | |
| | | CLIP CARD 5     |  | CLIP CARD 6     |  | CLIP CARD 7     |                                | |
| | | Thumbnail (30s) |  | Thumbnail (15s) |  | Thumbnail (45s) |                                | |
| | | "AI-suggested..." |  | "AI-suggested..." |  | "AI-suggested..." |                                | |
| | | [ Edit ] [ Export ] |  | [ Edit ] [ Export ] |  | [ Edit ] [ Export ] |                                | |
| | +-----------------+  +-----------------+  +-----------------+                                | |
| |                                                                                              | |
| +----------------------------------------------------------------------------------------------+ |
|                                                                                                  |
+--------------------------------------------------------------------------------------------------+

// Clip Editor Modal Overlay
+--------------------------------------------------------------------------------------------------+
|                                                                                                  |
|                                                                                                  |
|                                                                                                  |
|                                +-------------------------------------------+                     |
|                                |         EDIT CLIP                         | [X] Close           |
|                                |-------------------------------------------|                     |
|                                | +---------------------------------------+ |                     |
|                                | | [ Video Player w/ Preview ]           | |                     |
|                                | | [ Scrubber & Controls ]               | |                     |
|                                | +---------------------------------------+ |                     |
|                                |                                           |                     |
|                                | Caption:                                  |                     |
|                                | | This is my amazing clip caption!      | |                     |
|                                | |_______________________________________| |                     |
|                                |                                           |                     |
|                                | Caption Style:                            |                     |
|                                | [ Animated ] [ Static ] [ Font ] [ Color ]|                     |
|                                |                                           |                     |
|                                | [ Save Changes ] [ Cancel ]               |                     |
|                                +-------------------------------------------+                     |
|                                                                                                  |
|                                                                                                  |
+--------------------------------------------------------------------------------------------------+
6.7 Billing Page (/billing)
+--------------------------------------------------------------------------------------------------+
| CONTENTFORGE AI Logo | Dashboard | Upload | Billing | Settings                   [User Avatar] |
+--------------------------------------------------------------------------------------------------+
|                                                                                                  |
| +----------------------------------------------------------------------------------------------+ |
| |                                BILLING & SUBSCRIPTIONS                                       | |
| +----------------------------------------------------------------------------------------------+ |
| |                                                                                              | |
| | +------------------------------------------------------------------------------------------+ | |
| | | YOUR CURRENT PLAN                                                                        | | |
| | |------------------------------------------------------------------------------------------| | |
| | | Plan: Creator ($49/month)                                                                | | |
| | | Next Billing Date: December 7, 2026                                                      | | |
| | |                                                                                          | | |
| | | [ Change Plan ]                  [ Cancel Subscription ]                                 | | |
| | +------------------------------------------------------------------------------------------+ | |
| |                                                                                              | |
| | +------------------------------------------------------------------------------------------+ | |
| | | BILLING HISTORY                                                                          | | |
| | |------------------------------------------------------------------------------------------| | |
| | | Date         | Invoice #    | Amount | Status | Action                                  | | |
| | |--------------|--------------|--------|--------|------------------------------------------| | |
| | | 2026-11-07   | INV-001      | $49.00 | Paid   | [ Download PDF ]                         | | |
| | | 2026-10-07   | INV-000      | $49.00 | Paid   | [ Download PDF ]                         | | |
| | |                                                                                          | | |
| | | [ Add/Update Payment Method ]                                                            | | |
| | +------------------------------------------------------------------------------------------+ | |
| |                                                                                              | |
| +----------------------------------------------------------------------------------------------+ |
|                                                                                                  |
+--------------------------------------------------------------------------------------------------+
6.8 Settings Page (/settings)
+--------------------------------------------------------------------------------------------------+
| CONTENTFORGE AI Logo | Dashboard | Upload | Billing | Settings                   [User Avatar] |
+--------------------------------------------------------------------------------------------------+
|                                                                                                  |
| +----------------------------------------------------------------------------------------------+ |
| |                                    SETTINGS                                                  | |
| +----------------------------------------------------------------------------------------------+ |
| |                                                                                              | |
| | +------------+  +-------------------------------------------------------------------------+ | |
| | | [ Profile ]|  | PROFILE SETTINGS                                                        | | |
| | |------------|  |-------------------------------------------------------------------------| | |
| | | [ Account ]|  | Name                                                                    | | |
| | |------------|  | | John Doe                                                              | | |
| | |            |  | Email                                                                   | | |
| | |            |  | | john.doe@example.com                                                  | | |
| | |            |  |                                                                         | | |
| | |            |  | [ Change Password ]                                                     | | |
| | |            |  |                                                                         | | |
| | |            |  | [ Save Changes ]                                                        | | |
| | +------------+  +-------------------------------------------------------------------------+ | |
| |                                                                                              | |
| +----------------------------------------------------------------------------------------------+ |
|                                                                                                  |
+--------------------------------------------------------------------------------------------------+

complete this Generate the complete UI design system for ContentForge AI.

Requirements:

Style:
- Modern SaaS
- Dark Theme First
- Similar quality to Linear, Notion, Stripe and Vercel

Create:

- Color Palette
- Typography
- Spacing System
- Components
- Cards
- Buttons
- Forms
- Sidebar
- Tables
- Modals
- Upload Components
- Video Preview Components

For every page generate a wireframe using ASCII layout.

Do not generate code.

Think like a Senior Product Designer.


My apologies, co-founder, for the abrupt cut-off in the previous response. Let’s complete the UI Design System with the full Settings page wireframe.

6. Page Wireframes (ASCII Layout) (Continued)
6.8 Settings Page (/settings) (Completed)
+--------------------------------------------------------------------------------------------------+
| CONTENTFORGE AI Logo | Dashboard | Upload | Billing | Settings                   [User Avatar] |
+--------------------------------------------------------------------------------------------------+
|                                                                                                  |
| +----------------------------------------------------------------------------------------------+ |
| |                                    SETTINGS                                                  | |
| +----------------------------------------------------------------------------------------------+ |
| |                                                                                              | |
| | +------------+  +-------------------------------------------------------------------------+ | |
| | | [ Profile ]|  | PROFILE SETTINGS                                                        | | |
| | |------------|  |-------------------------------------------------------------------------| | |
| | | [ Account ]|  | Name                                                                    | | |
| | |------------|  | | John Doe                                                              | | |
| | |            |  | Email                                                                   | | |
| | |            |  | | john.doe@example.com (Read-only for now)                              | | |
| | |            |  | Password                                                                | | |
| | |            |  | | ************                                                          | | |
| | |            |  | [ Change Password ]                                                     | | |
| | |            |  |                                                                         | | |
| | |            |  | [ Save Changes ]                                                        | | |
| | +------------+  +-------------------------------------------------------------------------+ | |
| |                                                                                              | |
| +----------------------------------------------------------------------------------------------+ |
|                                                                                                  |
+--------------------------------------------------------------------------------------------------+

// If 'Account' tab is selected:
+--------------------------------------------------------------------------------------------------+
| CONTENTFORGE AI Logo | Dashboard | Upload | Billing | Settings                   [User Avatar] |
+--------------------------------------------------------------------------------------------------+
|                                                                                                  |
| +----------------------------------------------------------------------------------------------+ |
| |                                    SETTINGS                                                  | |
| +----------------------------------------------------------------------------------------------+ |
| |                                                                                              | |
| | +------------+  +-------------------------------------------------------------------------+ | |
| | | [ Profile ]|  | ACCOUNT SETTINGS                                                        | | |
| | |------------|  |-------------------------------------------------------------------------| | |
| | | [ Account ]|  | Connected Accounts                                                      | | |
| | |------------|  |   Google: Connected (john.doe@gmail.com) [ Disconnect ]                 | | |
| | |            |  |   GitHub: Not Connected                    [ Connect ]                  | | |
| | |            |  |                                                                         | | |
| | |            |  | Danger Zone                                                             | | |
| | |            |  |   [ Delete Account ]                                                    | | |
| | |            |  |     (This action is irreversible.)                                      | | |
| | +------------+  +-------------------------------------------------------------------------+ | |
| |                                                                                              | |
+--------------------------------------------------------------------------------------------------+
This completes our initial UI Design System for ContentForge AI. This foundation will guide our development team in creating a consistent, elegant, and highly functional user interface that users will love. The focus on clarity, efficiency, and a modern dark theme will ensure ContentForge AI stands out as a premium tool in the creator economy.


Act as a Staff Software Engineer.

Create the production-ready project scaffold for ContentForge AI.

Stack:

Frontend:
- Next.js 15
- React
- TypeScript
- Tailwind
- Shadcn UI

Backend:
- NestJS
- PostgreSQL
- Prisma

Services:
- OpenAI
- Whisper
- Stripe
- AWS S3
- Redis
- BullMQ

Generate:

1. Folder structure

2. Prisma schema

3. Environment variables

4. Database migrations

5. Authentication module

6. Upload module

7. AI processing module

8. Billing module

9. Queue workers

10. API routes

11. Docker setup

12. Docker Compose

13. GitHub Actions CI/CD

14. Deployment Scripts

Output code in implementation order.


Alright, co-founder. As a Staff Software Engineer, I’m laying down the production-ready scaffold for ContentForge AI. This setup prioritizes maintainability, scalability, and developer experience using our chosen stack. We’ll proceed in a logical implementation order, starting with the foundational structure and moving up to application logic and deployment.

ContentForge AI - Production-Ready Project Scaffold
1. Folder Structure
We’ll use a pnpm monorepo with explicit workspaces.

contentforge-ai/
├── apps/
│   ├── web/                     # Next.js Frontend Application
│   │   ├── public/
│   │   ├── src/
│   │   │   ├── app/             # Next.js App Router
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   ├── lib/
│   │   │   ├── styles/
│   │   │   └── types/
│   │   ├── next.config.js
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── tailwind.config.ts
│   │
│   └── api/                     # NestJS Backend API
│       ├── src/
│       │   ├── main.ts
│       │   ├── app.module.ts
│       │   ├── auth/            # Auth module
│       │   ├── users/           # Users module
│       │   ├── projects/        # Projects module
│       │   ├── videos/          # Video upload/management
│       │   ├── clips/           # Clip generation/editing
│       │   ├── exports/         # Export management
│       │   ├── billing/         # Billing module
│       │   ├── ai/              # AI orchestration module
│       │   ├── queues/          # Queue definitions & producers
│       │   ├── common/          # Global pipes, filters, interceptors
│       │   └── config/          # Configuration (env, constants)
│       ├── test/
│       ├── package.json
│       ├── tsconfig.json
│       └── nest-cli.json
│
├── packages/
│   ├── db/                      # Database layer (Prisma client, schema, migrations)
│   │   ├── prisma/
│   │   │   ├── schema.prisma
│   │   │   └── migrations/
│   │   ├── index.ts             # Prisma client export
│   │   └── package.json
│   │
│   ├── types/                   # Shared TypeScript types/interfaces
│   │   ├── index.ts
│   │   └── package.json
│   │
│   ├── ui/                      # Shared UI components (Shadcn config/utils)
│   │   ├── lib/
│   │   ├── components/
│   │   └── package.json
│   │
│   └── lib/                     # Shared backend utilities (S3, FFMPEG wrappers)
│       ├── index.ts
│       └── package.json
│
├── workers/                     # Dedicated Worker Processes
│   ├── transcribe-worker/
│   │   ├── src/main.ts
│   │   ├── src/transcribe.module.ts
│   │   ├── src/transcribe.processor.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── analyze-worker/
│   │   ├── src/main.ts
│   │   ├── src/analyze.module.ts
│   │   ├── src/analyze.processor.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── video-processing-worker/ # Handles clipping, caption overlay
│   │   ├── src/main.ts
│   │   ├── src/video-processing.module.ts
│   │   ├── src/video-processing.processor.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── export-worker/           # Handles final export process, watermark
│       ├── src/main.ts
│       ├── src/export.module.ts
│       ├── src/export.processor.ts
│       ├── package.json
│       └── tsconfig.json
│
├── .env.example
├── .gitignore
├── pnpm-workspace.yaml
├── package.json                 # Root package.json (scripts, dev dependencies)
├── tsconfig.base.json           # Base TypeScript config
└── README.md
Root package.json

json
{
  "name": "contentforge-ai-monorepo",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "build": "pnpm -r build",
    "dev": "pnpm -r dev",
    "db:push": "pnpm --filter db prisma db push",
    "db:migrate": "pnpm --filter db prisma migrate dev",
    "db:studio": "pnpm --filter db prisma studio",
    "start:api": "pnpm --filter api start:dev",
    "start:web": "pnpm --filter web dev",
    "start:workers": "pnpm --filter transcribe-worker start:dev & pnpm --filter analyze-worker start:dev & pnpm --filter video-processing-worker start:dev & pnpm --filter export-worker start:dev"
  },
  "devDependencies": {
    "prettier": "^3.1.0",
    "typescript": "^5.3.3"
  },
  "pnpm": {
    "overrides": {
      "typescript": "^5.3.3"
    }
  }
}
pnpm-workspace.yaml

yaml
packages:
  - 'apps/*'
  - 'packages/*'
  - 'workers/*'
tsconfig.base.json

json
{
  "compilerOptions": {
    "target": "es2021",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@contentforge/db": ["./packages/db/src"],
      "@contentforge/types": ["./packages/types/src"],
      "@contentforge/ui": ["./packages/ui/src"],
      "@contentforge/lib": ["./packages/lib/src"]
    }
  },
  "exclude": ["node_modules"]
}
2. Environment Variables
.env.example (Root of monorepo)

# Database
DATABASE_URL="postgresql://user:password@localhost:5432/contentforge?schema=public"

# Redis
REDIS_HOST="localhost"
REDIS_PORT=6379
REDIS_PASSWORD="" # Optional

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_..."
CLERK_SECRET_KEY="sk_test_..."
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# AWS S3
AWS_ACCESS_KEY_ID="YOUR_AWS_ACCESS_KEY_ID"
AWS_SECRET_ACCESS_KEY="YOUR_AWS_SECRET_ACCESS_KEY"
AWS_REGION="us-east-1"
AWS_S3_BUCKET_NAME="contentforge-ai-media"
AWS_S3_ENDPOINT="https://s3.your-region.amazonaws.com" # Optional, for custom endpoints

# OpenAI
OPENAI_API_KEY="sk-..."
OPENAI_ORG_ID="org-..." # Optional

# Stripe
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
STRIPE_PRODUCT_ID_CREATOR="prod_..."
STRIPE_PRICE_ID_CREATOR="price_..."
STRIPE_PRODUCT_ID_PRO="prod_..."
STRIPE_PRICE_ID_PRO="price_..."

# Application
API_BASE_URL="http://localhost:3001" # For frontend to call backend
WEB_BASE_URL="http://localhost:3000" # For webhooks/redirects
JWT_SECRET="YOUR_SUPER_SECRET_JWT_KEY" # For NestJS internal JWT (if used, Clerk handles main auth)
3. Prisma Schema
packages/db/prisma/schema.prisma

// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
  output   = "../src/client"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id                    String      @id @default(cuid())
  clerkId               String      @unique // Clerk's user ID
  email                 String      @unique
  name                  String?
  imageUrl              String?
  createdAt             DateTime    @default(now())
  updatedAt             DateTime    @updatedAt
  lastLoginAt           DateTime?

  projects              Project[]
  subscriptions         Subscription[]
  usageRecords          UsageRecord[]
}

model Subscription {
  id                    String      @id @default(cuid())
  userId                String
  user                  User        @relation(fields: [userId], references: [id], onDelete: Cascade)
  stripeCustomerId      String      @unique
  stripeSubscriptionId  String?     @unique
  planId                String      // 'free', 'creator', 'pro', 'agency'
  status                String      // 'active', 'canceled', 'past_due', 'trialing'
  currentPeriodStart    DateTime
  currentPeriodEnd      DateTime
  trialStart            DateTime?
  trialEnd              DateTime?
  createdAt             DateTime    @default(now())
  updatedAt             DateTime    @updatedAt
}

model Project {
  id                    String      @id @default(cuid())
  userId                String
  user                  User        @relation(fields: [userId], references: [id], onDelete: Cascade)
  title                 String
  status                String      @default("created") // 'created', 'processing', 'completed', 'error'
  createdAt             DateTime    @default(now())
  updatedAt             DateTime    @updatedAt

  videos                Video[]
  clips                 Clip[]
}

model Video {
  id                    String      @id @default(cuid())
  projectId             String
  project               Project     @relation(fields: [projectId], references: [id], onDelete: Cascade)
  userId                String      // Denormalized
  originalFileName      String?
  sourceUrl             String?     // For YouTube URLs
  storagePath           String?     // S3 path for uploaded files
  durationSeconds       Int         @default(0)
  fileSizeBytes         BigInt      @default(0)
  uploadStatus          String      @default("pending") // 'pending', 'uploaded', 'failed'
  processingStatus      String      @default("queued") // 'queued', 'transcribing', 'analyzing', 'clipping', 'completed', 'error'
  createdAt             DateTime    @default(now())
  updatedAt             DateTime    @updatedAt

  transcript            Transcript?
  clips                 Clip[]
}

model Transcript {
  id                    String      @id @default(cuid())
  videoId               String      @unique
  video                 Video       @relation(fields: [videoId], references: [id], onDelete: Cascade)
  text                  String
  wordLevelTimestamps   Json?       // Stores word-level timings
  status                String      @default("pending") // 'pending', 'completed', 'error'
  createdAt             DateTime    @default(now())
  updatedAt             DateTime    @updatedAt
}

model Clip {
  id                    String      @id @default(cuid())
  projectId             String
  project               Project     @relation(fields: [projectId], references: [id], onDelete: Cascade)
  videoId               String
  video                 Video       @relation(fields: [videoId], references: [id], onDelete: Cascade)
  userId                String      // Denormalized
  startTimeSeconds      Int
  endTimeSeconds        Int
  durationSeconds       Int
  aiSuggestedCaption    String?
  userCaption           String?
  captionSettings       Json?       // Stores font, color, animation settings
  thumbnailUrl          String?
  status                String      @default("generated") // 'generated', 'exported', 'error'
  createdAt             DateTime    @default(now())
  updatedAt             DateTime    @updatedAt

  exports               Export[]
}

model Export {
  id                    String      @id @default(cuid())
  clipId                String
  clip                  Clip        @relation(fields: [clipId], references: [id], onDelete: Cascade)
  userId                String      // Denormalized
  projectId             String      // Denormalized
  exportUrl             String?     // S3 path to the final exported video file
  resolution            String      @default("1080x1920")
  watermarkApplied      Boolean     @default(true)
  status                String      @default("pending") // 'pending', 'processing', 'completed', 'failed'
  createdAt             DateTime    @default(now())
  updatedAt             DateTime    @updatedAt
}

model UsageRecord {
  id                    String      @id @default(cuid())
  userId                String
  user                  User        @relation(fields: [userId], references: [id], onDelete: Cascade)
  eventType             String      // 'minutes_processed', 'clip_generated', 'export_performed'
  value                 Decimal     @db.Decimal(10, 2)
  eventDate             DateTime    @default(now()) @db.Date
  createdAt             DateTime    @default(now())
}

model BillingEvent {
  id                    String      @id @default(cuid())
  userId                String?
  user                  User?       @relation(fields: [userId], references: [id], onDelete: SetNull)
  eventType             String
  payload               Json
  processed             Boolean     @default(false)
  createdAt             DateTime    @default(now())
}
packages/db/index.ts

typescript
import { PrismaClient } from './src/client';

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!(global as any).prisma) {
    (global as any).prisma = new PrismaClient();
  }
  prisma = (global as any).prisma;
}

export { prisma };
4. Database Migrations
From the root of the monorepo, after setting up DATABASE_URL in .env:

bash
pnpm --filter db prisma migrate dev --name init
This will generate the initial migration files in packages/db/prisma/migrations.

5. Docker Setup
We’ll use multi-stage builds for efficiency.

Dockerfile for apps/api (Backend)

dockerfile
# Stage 1: Build the NestJS application
FROM node:20-alpine AS builder

WORKDIR /app

# Copy pnpm-lock.yaml and package.json files from the root and individual apps/packages
COPY pnpm-lock.yaml ./
COPY package.json ./
COPY apps/api/package.json ./apps/api/
COPY packages/db/package.json ./packages/db/
COPY packages/types/package.json ./packages/types/
COPY packages/lib/package.json ./packages/lib/

# Install pnpm and dependencies
RUN npm install -g pnpm
RUN pnpm fetch --prod
RUN pnpm install --frozen-lockfile --prod

# Copy source code
COPY . .

# Build API application
RUN pnpm --filter api build

# Stage 2: Create the production image
FROM node:20-alpine AS runner

WORKDIR /app

# Copy pnpm-lock.yaml and package.json files for production install
COPY pnpm-lock.yaml ./
COPY package.json ./
COPY apps/api/package.json ./apps/api/
COPY packages/db/package.json ./packages/db/
COPY packages/types/package.json ./packages/types/
COPY packages/lib/package.json ./packages/lib/

# Install pnpm and production dependencies
RUN npm install -g pnpm
RUN pnpm fetch --prod
RUN pnpm install --frozen-lockfile --prod

# Copy built application from builder stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules # Copy root node_modules for hoisted deps
COPY --from=builder /app/apps/api/node_modules ./apps/api/node_modules # Copy app-specific node_modules
COPY --from=builder /app/packages/db/node_modules ./packages/db/node_modules # Copy db-specific node_modules
COPY --from=builder /app/packages/types/node_modules ./packages/types/node_modules # Copy types-specific node_modules
COPY --from=builder /app/packages/lib/node_modules ./packages/lib/node_modules # Copy lib-specific node_modules

# Copy Prisma schema and generated client
COPY packages/db/prisma ./packages/db/prisma
COPY packages/db/src/client ./packages/db/src/client

# Expose the port the app runs on
EXPOSE 3001

# Command to run the application
CMD ["node", "dist/apps/api/main"]
Dockerfile for apps/web (Frontend)

dockerfile
# Stage 1: Install dependencies and build Next.js app
FROM node:20-alpine AS builder

WORKDIR /app

COPY pnpm-lock.yaml ./
COPY package.json ./
COPY apps/web/package.json ./apps/web/
COPY packages/db/package.json ./packages/db/
COPY packages/types/package.json ./packages/types/
COPY packages/ui/package.json ./packages/ui/

RUN npm install -g pnpm
RUN pnpm fetch --prod
RUN pnpm install --frozen-lockfile --prod

COPY . .

# Build Next.js app
RUN pnpm --filter web build

# Stage 2: Production image
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV production

# Copy built assets
COPY --from=builder /app/apps/web/.next ./apps/web/.next
COPY --from=builder /app/apps/web/public ./apps/web/public

# Copy pnpm-lock.yaml and package.json files for production install
COPY pnpm-lock.yaml ./
COPY package.json ./
COPY apps/web/package.json ./apps/web/
COPY packages/db/package.json ./packages/db/
COPY packages/types/package.json ./packages/types/
COPY packages/ui/package.json ./packages/ui/

# Install pnpm and production dependencies
RUN npm install -g pnpm
RUN pnpm fetch --prod
RUN pnpm install --frozen-lockfile --prod

# Copy necessary node_modules
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/web/node_modules ./apps/web/node_modules
COPY --from=builder /app/packages/db/node_modules ./packages/db/node_modules
COPY --from=builder /app/packages/types/node_modules ./packages/types/node_modules
COPY --from=builder /app/packages/ui/node_modules ./packages/ui/node_modules

# Set the correct working directory for the Next.js app
WORKDIR /app/apps/web

EXPOSE 3000

CMD ["pnpm", "start"]
Dockerfile for Workers (Example for workers/transcribe-worker) (Similar Dockerfiles for analyze-worker, video-processing-worker, export-worker)

dockerfile
# Stage 1: Build the NestJS worker application
FROM node:20-alpine AS builder

WORKDIR /app

COPY pnpm-lock.yaml ./
COPY package.json ./
COPY workers/transcribe-worker/package.json ./workers/transcribe-worker/
COPY packages/db/package.json ./packages/db/
COPY packages/types/package.json ./packages/types/
COPY packages/lib/package.json ./packages/lib/

RUN npm install -g pnpm
RUN pnpm fetch --prod
RUN pnpm install --frozen-lockfile --prod

COPY . .

RUN pnpm --filter transcribe-worker build

# Stage 2: Create the production image
FROM node:20-alpine AS runner

WORKDIR /app

COPY pnpm-lock.yaml ./
COPY package.json ./
COPY workers/transcribe-worker/package.json ./workers/transcribe-worker/
COPY packages/db/package.json ./packages/db/
COPY packages/types/package.json ./packages/types/
COPY packages/lib/package.json ./packages/lib/

RUN npm install -g pnpm
RUN pnpm fetch --prod
RUN pnpm install --frozen-lockfile --prod

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/workers/transcribe-worker/node_modules ./workers/transcribe-worker/node_modules
COPY --from=builder /app/packages/db/node_modules ./packages/db/node_modules
COPY --from=builder /app/packages/types/node_modules ./packages/types/node_modules
COPY --from=builder /app/packages/lib/node_modules ./packages/lib/node_modules

COPY packages/db/prisma ./packages/db/prisma
COPY packages/db/src/client ./packages/db/src/client

CMD ["node", "dist/workers/transcribe-worker/main"]
6. Docker Compose
docker-compose.yml

yaml
version: '3.8'

services:
  db:
    image: postgres:15-alpine
    restart: always
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
      POSTGRES_DB: contentforge
    volumes:
      - db_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  redis:
    image: redis:7-alpine
    restart: always
    ports:
      - "6379:6379"
    command: redis-server --appendonly yes
    volumes:
      - redis_data:/data

  api:
    build:
      context: .
      dockerfile: Dockerfile.api # Rename Dockerfile to Dockerfile.api in root
    restart: always
    ports:
      - "3001:3001"
    environment:
      DATABASE_URL: postgresql://user:password@db:5432/contentforge?schema=public
      REDIS_HOST: redis
      REDIS_PORT: 6379
      # ... other environment variables from .env
    depends_on:
      - db
      - redis
    volumes:
      - .:/app # Mount for hot-reloading during development (optional, remove for production)
      - /app/node_modules # Exclude node_modules from host mount
    working_dir: /app

  web:
    build:
      context: .
      dockerfile: Dockerfile.web # Rename Dockerfile to Dockerfile.web in root
    restart: always
    ports:
      - "3000:3000"
    environment:
      NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: ${NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      CLERK_SECRET_KEY: ${CLERK_SECRET_KEY}
      NEXT_PUBLIC_CLERK_SIGN_IN_URL: ${NEXT_PUBLIC_CLERK_SIGN_IN_URL}
      NEXT_PUBLIC_CLERK_SIGN_UP_URL: ${NEXT_PUBLIC_CLERK_SIGN_UP_URL}
      NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL: ${NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL}
      NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL: ${NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL}
      API_BASE_URL: http://api:3001 # Internal Docker network hostname
      # ... other NEXT_PUBLIC_ variables
    depends_on:
      - api
    volumes:
      - .:/app # Mount for hot-reloading during development (optional, remove for production)
      - /app/node_modules # Exclude node_modules from host mount
    working_dir: /app

  transcribe-worker:
    build:
      context: .
      dockerfile: Dockerfile.transcribe-worker # Create this Dockerfile
    restart: always
    environment:
      DATABASE_URL: postgresql://user:password@db:5432/contentforge?schema=public
      REDIS_HOST: redis
      REDIS_PORT: 6379
      OPENAI_API_KEY: ${OPENAI_API_KEY}
      # ... other worker-specific env vars
    depends_on:
      - db
      - redis
    volumes:
      - .:/app
      - /app/node_modules
    working_dir: /app

  # ... other workers (analyze-worker, video-processing-worker, export-worker) with similar configs

volumes:
  db_data:
  redis_data:
Note: Rename the Dockerfiles in the root of the monorepo to Dockerfile.api, Dockerfile.web, Dockerfile.transcribe-worker, etc., to match docker-compose.yml.

7. Authentication Module (NestJS apps/api/src/auth)
We’ll integrate with Clerk for main user management and use a local JWT for internal API protection.

apps/api/src/auth/auth.module.ts

typescript
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { ClerkWebhookStrategy } from './strategies/clerk-webhook.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '1h' },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [AuthService, ClerkWebhookStrategy, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
apps/api/src/auth/auth.service.ts

typescript
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(clerkId: string): Promise<User | null> {
    const user = await this.usersService.findByClerkId(clerkId);
    return user;
  }

  async login(user: User) {
    const payload = { email: user.email, sub: user.id, clerkId: user.clerkId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async handleClerkWebhook(eventType: string, data: any) {
    switch (eventType) {
      case 'user.created':
      case 'user.updated':
        await this.usersService.upsertUser({
          clerkId: data.id,
          email: data.email_addresses[0]?.email_address,
          name: data.first_name || data.last_name ? `${data.first_name || ''} ${data.last_name || ''}`.trim() : null,
          imageUrl: data.profile_image_url,
        });
        break;
      case 'user.deleted':
        await this.usersService.deleteUserByClerkId(data.id);
        break;
      default:
        console.warn(`Unhandled Clerk webhook event type: ${eventType}`);
    }
  }
}
apps/api/src/auth/auth.controller.ts

typescript
import { Controller, Post, Body, UseGuards, Get, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ClerkWebhookStrategy } from './strategies/clerk-webhook.strategy';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // This endpoint is for Clerk webhooks only
  @Post('webhook')
  @UseGuards(ClerkWebhookStrategy) // Custom guard to validate Clerk webhook signature
  async handleClerkWebhook(@Body() payload: any) {
    const eventType = payload.type;
    await this.authService.handleClerkWebhook(eventType, payload.data);
    return { received: true };
  }

  // Example of a protected route using JWT (after user is logged in via Clerk and obtains our JWT)
  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Req() req) {
    return req.user; // req.user is populated by JwtStrategy
  }
}
apps/api/src/auth/strategies/clerk-webhook.strategy.ts (This is a simplified example. Real validation needs to verify webhook signature.)

typescript
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard, PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-custom';
import { Request } from 'express';

@Injectable()

is this completed Act as a Staff Software Engineer.

Create the production-ready project scaffold for ContentForge AI.

Stack:

Frontend:
- Next.js 15
- React
- TypeScript
- Tailwind
- Shadcn UI

Backend:
- NestJS
- PostgreSQL
- Prisma

Services:
- OpenAI
- Whisper
- Stripe
- AWS S3
- Redis
- BullMQ

Generate:

1. Folder structure

2. Prisma schema

3. Environment variables

4. Database migrations

5. Authentication module

6. Upload module

7. AI processing module

8. Billing module

9. Queue workers

10. API routes

11. Docker setup

12. Docker Compose

13. GitHub Actions CI/CD

14. Deployment Scripts

Output code in implementation order.


No, the previous response is not yet complete. I’ve covered items 1 through part of 7 (Authentication Module).

Let’s continue building out the production-ready scaffold from where we left off.

PHASE 7: Authentication Module (NestJS apps/api/src/auth) (Continued)
apps/api/src/auth/strategies/clerk-webhook.strategy.ts (Completed with placeholder for actual verification)

typescript
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-custom';
import { Request } from 'express';
import { Webhook } from 'svix'; // For Clerk webhook verification

@Injectable()
export class ClerkWebhookStrategy extends PassportStrategy(Strategy, 'clerk-webhook') {
  constructor() {
    super();
  }

  async validate(req: Request): Promise<boolean> {
    const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET; // Ensure this is set in .env
    if (!WEBHOOK_SECRET) {
      throw new UnauthorizedException('Clerk Webhook Secret not configured.');
    }

    const payload = JSON.stringify(req.body);
    const headers = req.headers;

    const svix_id = headers['svix-id'] as string;
    const svix_timestamp = headers['svix-timestamp'] as string;
    const svix_signature = headers['svix-signature'] as string;

    if (!svix_id || !svix_timestamp || !svix_signature) {
      throw new UnauthorizedException('Missing Clerk webhook headers.');
    }

    const wh = new Webhook(WEBHOOK_SECRET);
    let evt;

    try {
      evt = wh.verify(payload, {
        "svix-id": svix_id,
        "svix-timestamp": svix_timestamp,
        "svix-signature": svix_signature,
      });
    } catch (err) {
      console.error('Clerk webhook verification failed:', err);
      throw new UnauthorizedException('Clerk webhook verification failed.');
    }

    // If verification passes, the request is valid.
    // We don't need to return a user object here, just indicate validity.
    return true;
  }
}
apps/api/src/auth/strategies/jwt.strategy.ts

typescript
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { UsersService } from '../../users/users.service';
import { User } from '@prisma/client';

export interface JwtPayload {
  email: string;
  sub: string; // Our internal user ID
  clerkId: string;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private configService: ConfigService,
    private usersService: UsersService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET'),
    });
  }

  async validate(payload: JwtPayload): Promise<User> {
    const user = await this.usersService.findById(payload.sub);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
apps/api/src/users/users.module.ts (Required by AuthModule)

typescript
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaModule } from '../prisma/prisma.module'; // Assuming you have a PrismaModule

@Module({
  imports: [PrismaModule],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
apps/api/src/users/users.service.ts

typescript
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // Assuming PrismaService

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findByClerkId(clerkId: string) {
    return this.prisma.user.findUnique({ where: { clerkId } });
  }

  async findById(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async upsertUser(data: { clerkId: string; email: string; name?: string; imageUrl?: string }) {
    return this.prisma.user.upsert({
      where: { clerkId: data.clerkId },
      update: { email: data.email, name: data.name, imageUrl: data.imageUrl, lastLoginAt: new Date() },
      create: { clerkId: data.clerkId, email: data.email, name: data.name, imageUrl: data.imageUrl },
    });
  }

  async deleteUserByClerkId(clerkId: string) {
    return this.prisma.user.delete({ where: { clerkId } });
  }
}
apps/api/src/prisma/prisma.module.ts (Centralized Prisma client)

typescript
import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
apps/api/src/prisma/prisma.service.ts

typescript
import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
8. Upload Module (NestJS apps/api/src/videos)
This module handles video ingestion, S3 interaction, and initiating processing.

apps/api/src/videos/videos.module.ts

typescript
import { Module } from '@nestjs/common';
import { VideosService } from './videos.service';
import { VideosController } from './videos.controller';
import { ProjectsModule } from '../projects/projects.module';
import { S3Module } from '../s3/s3.module'; // Custom S3 module
import { QueuesModule } from '../queues/queues.module'; // Custom Queues module

@Module({
  imports: [ProjectsModule, S3Module, QueuesModule],
  providers: [VideosService],
  controllers: [VideosController],
  exports: [VideosService],
})
export class VideosModule {}
apps/api/src/videos/videos.service.ts

typescript
import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { S3Service } from '../s3/s3.service';
import { QueueProducerService } from '../queues/queue-producer.service';
import { VideoUploadJobData, YtIngestJobData } from '@contentforge/types/queue-jobs';
import { VideoStatus } from '@contentforge/types/enums'; // Define these enums in @contentforge/types

@Injectable()
export class VideosService {
  constructor(
    private prisma: PrismaService,
    private s3Service: S3Service,
    private queueProducer: QueueProducerService,
  ) {}

  async createVideoRecord(projectId: string, userId: string, fileName?: string, sourceUrl?: string) {
    return this.prisma.video.create({
      data: {
        projectId,
        userId,
        originalFileName: fileName,
        sourceUrl,
        uploadStatus: VideoStatus.PENDING,
        processingStatus: VideoStatus.QUEUED,
      },
    });
  }

  async getUploadUrl(projectId: string, userId: string, fileName: string, fileType: string, fileSize: number) {
    const video = await this.createVideoRecord(projectId, userId, fileName);
    const key = `raw-videos/${userId}/${projectId}/${video.id}/${fileName}`;
    const uploadUrl = await this.s3Service.getPresignedUploadUrl(key, fileType);

    await this.prisma.video.update({
      where: { id: video.id },
      data: { storagePath: key, fileSizeBytes: fileSize },
    });

    return { uploadUrl, key, videoId: video.id };
  }

  async handleYoutubeIngestion(projectId: string, userId: string, youtubeUrl: string) {
    const video = await this.createVideoRecord(projectId, userId, undefined, youtubeUrl);
    const jobData: YtIngestJobData = { videoId: video.id, youtubeUrl };
    await this.queueProducer.addYoutubeIngestJob(jobData);
    return video;
  }

  async markUploadComplete(videoId: string) {
    const video = await this.prisma.video.update({
      where: { id: video.id },
      data: { uploadStatus: VideoStatus.UPLOADED },
    });

    if (!video) {
      throw new NotFoundException('Video not found.');
    }
    if (!video.storagePath) {
      throw new BadRequestException('Video storage path missing, cannot initiate processing.');
    }

    const jobData: VideoUploadJobData = { videoId: video.id, storagePath: video.storagePath };
    await this.queueProducer.addVideoUploadJob(jobData);
    return video;
  }

  async getVideoStatus(videoId: string) {
    const video = await this.prisma.video.findUnique({
      where: { id: videoId },
      select: { id: true, processingStatus: true, uploadStatus: true, project: { select: { id: true, title: true } } },
    });
    if (!video) {
      throw new NotFoundException('Video not found.');
    }
    // TODO: Add more detailed progress from workers if available
    return video;
  }
}
apps/api/src/videos/videos.controller.ts

typescript
import { Controller, Post, Body, Param, UseGuards, Get } from '@nestjs/common';
import { VideosService } from './videos.service';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../common/decorators/get-user.decorator';
import { User } from '@prisma/client';
import { CreateUploadUrlDto, YoutubeIngestDto } from './dto/videos.dto'; // Define DTOs

@Controller('projects/:projectId/videos')
@UseGuards(AuthGuard('jwt'))
export class VideosController {
  constructor(private videosService: VideosService) {}

  @Post('upload-url')
  async getUploadUrl(
    @Param('projectId') projectId: string,
    @GetUser() user: User,
    @Body() createUploadUrlDto: CreateUploadUrlDto,
  ) {
    const { fileName, fileType, fileSize } = createUploadUrlDto;
    return this.videosService.getUploadUrl(projectId, user.id, fileName, fileType, fileSize);
  }

  @Post('youtube')
  async handleYoutubeIngestion(
    @Param('projectId') projectId: string,
    @GetUser() user: User,
    @Body() youtubeIngestDto: YoutubeIngestDto,
  ) {
    const { youtubeUrl } = youtubeIngestDto;
    return this.videosService.handleYoutubeIngestion(projectId, user.id, youtubeUrl);
  }

  @Post(':videoId/upload-complete')
  async markUploadComplete(@Param('videoId') videoId: string, @GetUser() user: User) {
    // Optional: Add ownership check here
    return this.videosService.markUploadComplete(videoId);
  }

  @Get(':videoId/status')
  async getVideoStatus(@Param('videoId') videoId: string, @GetUser() user: User) {
    // Optional: Add ownership check here
    return this.videosService.getVideoStatus(videoId);
  }
}
apps/api/src/videos/dto/videos.dto.ts

typescript
import { IsString, IsNotEmpty, IsNumber, IsUrl } from 'class-validator';

export class CreateUploadUrlDto {
  @IsString()
  @IsNotEmpty()
  fileName: string;

  @IsString()
  @IsNotEmpty()
  fileType: string;

  @IsNumber()
  @IsNotEmpty()
  fileSize: number;
}

export class YoutubeIngestDto {
  @IsUrl()
  @IsNotEmpty()
  youtubeUrl: string;
}
apps/api/src/s3/s3.module.ts

typescript
import { Module } from '@nestjs/common';
import { S3Service } from './s3.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  providers: [S3Service],
  exports: [S3Service],
})
export class S3Module {}
apps/api/src/s3/s3.service.ts

typescript
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

@Injectable()
export class S3Service {
  private s3Client: S3Client;
  private bucketName: string;

  constructor(private configService: ConfigService) {
    this.bucketName = this.configService.get<string>('AWS_S3_BUCKET_NAME');
    this.s3Client = new S3Client({
      region: this.configService.get<string>('AWS_REGION'),
      credentials: {
        accessKeyId: this.configService.get<string>('AWS_ACCESS_KEY_ID'),
        secretAccessKey: this.configService.get<string>('AWS_SECRET_ACCESS_KEY'),
      },
      endpoint: this.configService.get<string>('AWS_S3_ENDPOINT') || undefined, // For localstack or custom endpoints
    });
  }

  async getPresignedUploadUrl(key: string, contentType: string): Promise<string> {
    const command = new PutObjectCommand({
      Bucket: this.bucketName,
      Key: key,
      ContentType: contentType,
      ACL: 'private', // Or 'public-read' if files are directly served
    });
    return getSignedUrl(this.s3Client, command, { expiresIn: 3600 }); // URL valid for 1 hour
  }

  async getPresignedDownloadUrl(key: string): Promise<string> {
    const command = new GetObjectCommand({
      Bucket: this.bucketName,
      Key: key,
    });
    return getSignedUrl(this.s3Client, command, { expiresIn: 3600 });
  }

  async getObjectReadStream(key: string) {
    const command = new GetObjectCommand({
      Bucket: this.bucketName,
      Key: key,
    });
    const response = await this.s3Client.send(command);
    return response.Body; // This is a Readable stream
  }

  async uploadFile(key: string, body: Buffer | ReadableStream | Blob, contentType: string): Promise<string> {
    const command = new PutObjectCommand({
      Bucket: this.bucketName,
      Key: key,
      Body: body,
      ContentType: contentType,
      ACL: 'private',
    });
    await this.s3Client.send(command);
    return `s3://${this.bucketName}/${key}`;
  }

  async deleteFile(key: string): Promise<void> {
    const command = new DeleteObjectCommand({
      Bucket: this.bucketName,
      Key: key,
    });
    await this.s3Client.send(command);
  }
}
apps/api/src/queues/queues.module.ts

typescript
import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { QueueProducerService } from './queue-producer.service';
import {
  VIDEO_UPLOAD_QUEUE,
  YOUTUBE_INGEST_QUEUE,
  TRANSCRIBE_QUEUE,
  ANALYZE_QUEUE,
  VIDEO_PROCESS_QUEUE,
  EXPORT_QUEUE
} from '@contentforge/types/queue-names'; // Define these constants

@Module({
  imports: [
    BullModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        redis: {
          host: configService.get<string>('REDIS_HOST'),
          port: configService.get<number>('REDIS_PORT'),
          password: configService.get<string>('REDIS_PASSWORD'),
        },
      }),
      inject: [ConfigService],
    }),
    BullModule.registerQueue(
      { name: VIDEO_UPLOAD_QUEUE },
      { name: YOUTUBE_INGEST_QUEUE },
      { name: TRANSCRIBE_QUEUE },
      { name: ANALYZE_QUEUE },
      { name: VIDEO_PROCESS_QUEUE },
      { name: EXPORT_QUEUE },
    ),
  ],
  providers: [QueueProducerService],
  exports: [QueueProducerService, BullModule],
})
export class QueuesModule {}
apps/api/src/queues/queue-producer.service.ts

typescript
import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import {
  VIDEO_UPLOAD_QUEUE,
  YOUTUBE_INGEST_QUEUE,
  TRANSCRIBE_QUEUE,
  ANALYZE_QUEUE,
  VIDEO_PROCESS_QUEUE,
  EXPORT_QUEUE
} from '@contentforge/types/queue-names';
import {
  VideoUploadJobData,
  YtIngestJobData,
  TranscribeJobData,
  AnalyzeJobData,
  VideoProcessJobData,
  ExportJobData
} from '@contentforge/types/queue-jobs';

@Injectable()
export class QueueProducerService {
  constructor(
    @InjectQueue(VIDEO_UPLOAD_QUEUE) private readonly videoUploadQueue: Queue<VideoUploadJobData>,
    @InjectQueue(YOUTUBE_INGEST_QUEUE) private readonly youtubeIngestQueue: Queue<YtIngestJobData>,
    @InjectQueue(TRANSCRIBE_QUEUE) private readonly transcribeQueue: Queue<TranscribeJobData>,
    @InjectQueue(ANALYZE_QUEUE) private readonly analyzeQueue: Queue<AnalyzeJobData>,
    @InjectQueue(VIDEO_PROCESS_QUEUE) private readonly videoProcessQueue: Queue<VideoProcessJobData>,
    @InjectQueue(EXPORT_QUEUE) private readonly exportQueue: Queue<ExportJobData>,
  ) {}

  async addVideoUploadJob(data: VideoUploadJobData) {
    await this.videoUploadQueue.add(data);
  }

  async addYoutubeIngestJob(data: YtIngestJobData) {
    await this.youtubeIngestQueue.add(data);
  }

  async addTranscribeJob(data: TranscribeJobData) {
    await this.transcribeQueue.add(data);
  }

  async addAnalyzeJob(data: AnalyzeJobData) {
    await this.analyzeQueue.add(data);
  }

  async addVideoProcessJob(data: VideoProcessJobData) {
    await this.videoProcessQueue.add(data);
  }

  async addExportJob(data: ExportJobData) {
    await this.exportQueue.add(data);
  }
}
packages/types/src/queue-names.ts

typescript
export const VIDEO_UPLOAD_QUEUE = 'video-upload';
export const YOUTUBE_INGEST_QUEUE = 'youtube-ingest';
export const TRANSCRIBE_QUEUE = 'transcribe';
export const ANALYZE_QUEUE = 'analyze';
export const VIDEO_PROCESS_QUEUE = 'video-process'; // For clipping, caption overlay
export const EXPORT_QUEUE = 'export';
packages/types/src/queue-jobs.ts

typescript
export interface VideoUploadJobData {
  videoId: string;
  storagePath: string; // S3 path
}

export interface YtIngestJobData {
  videoId: string;
  youtubeUrl: string;
}

export interface TranscribeJobData {
  videoId: string;
  videoStoragePath: string; // S3 path to video
}

export interface AnalyzeJobData {
  videoId: string;
  transcriptId: string;
}

export interface VideoProcessJobData {
  clipId: string;
  videoStoragePath: string; // S3 path to original video
  startTimeSeconds: number;
  endTimeSeconds: number;
  userCaption: string;
  captionSettings: any; // JSON object for styling
}

export interface ExportJobData {
  exportId: string;
  clipId: string;
  processedVideoStoragePath: string; // S3 path to the video with captions
  watermarkApplied: boolean;
  resolution: string;
}
packages/types/src/enums.ts

typescript
export enum VideoStatus {
  PENDING = 'pending',
  UPLOADED = 'uploaded',
  FAILED = 'failed',
  QUEUED = 'queued',
  TRANSCRIBING = 'transcribing',
  ANALYZING = 'analyzing',
  CLIPPING = 'clipping',
  COMPLETED = 'completed',
  ERROR = 'error',
}
9. AI Processing Module (NestJS apps/api/src/ai)
This module will contain services for interacting with OpenAI. The actual processing logic will live in workers.

apps/api/src/ai/ai.module.ts

typescript
import { Module } from '@nestjs/common';
import { OpenAIService } from './openai.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  providers: [OpenAIService],
  exports: [OpenAIService],
})
export class AiModule {}
apps/api/src/ai/openai.service.ts

typescript
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';

@Injectable()
export class OpenAIService {
  private openai: OpenAI;

  constructor(private configService: ConfigService) {
    this.openai = new OpenAI({
      apiKey: this.configService.get<string>('OPENAI_API_KEY'),
      organization: this.configService.get<string>('OPENAI_ORG_ID'), // Optional
    });
  }

  async transcribeAudio(audioBuffer: Buffer, language: string = 'en'): Promise<string> {
    // OpenAI Whisper API expects a File-like object.
    // For Node.js, we can use a Blob or a custom stream.
    // This is a simplified example; actual implementation might involve writing to a temp file or using a Readable stream.
    // For now, let's assume we can pass a Buffer and it gets handled.
    // More robust solution would be to use a library like 'form-data' to construct the multipart/form-data request.

    // Example with a mock file object (needs adjustment for actual API client)
    const audioFile = await OpenAI.toFile(audioBuffer, 'audio.mp3', { type: 'audio/mp3' });

    const transcription = await this.openai.audio.transcriptions.create({
      file: audioFile,
      model: 'whisper-1',
      language: language,
      response_format: 'text',
    });
    return transcription;
  }

  async analyzeTranscriptForClips(transcript: string): Promise<{ start: number; end: number; caption: string }[]> {
    const prompt = `
      You are an expert video editor. Your task is to analyze the following transcript and identify key moments that would make engaging short-form video clips (15-60 seconds) for platforms like TikTok, Instagram Reels, and YouTube Shorts.
      Focus on:
      - Hooks
      - Emotional peaks
      - Funny moments
      - Educational insights
      - Clear calls to action
      - Surprising statements

      For each identified clip, provide its start time (in seconds), end time (in seconds), and a concise, engaging caption.
      The transcript is:
      ---
      ${transcript}
      ---
      Provide the output as a JSON array of objects, where each object has 'start', 'end', and 'caption' keys. Ensure times are integers.

      Example format:
      [
        {"start": 10, "end": 40, "caption": "This is a great hook!"},
        {"start": 120, "end": 155, "caption": "You won't believe what happened next!"}
      ]
    `;

    const chatCompletion = await this.openai.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'gpt-4o', // or gpt-4-turbo
      response_format: { type: "json_object" },
    });

    const responseContent = chatCompletion.choices[0].message.content;
    try {
      const parsedResponse = JSON.parse(responseContent);
      if (!Array.isArray(parsedResponse)) {
        throw new Error('GPT response is not an array.');
      }
      return parsedResponse;
    } catch (error) {
      console.error('Failed to parse GPT response for clip analysis:', error, responseContent);
      throw new Error('Invalid response from AI for clip analysis.');
    }
  }
}
10. Billing Module (NestJS apps/api/src/billing)
This module handles Stripe integration, webhooks, and subscription management.

apps/api/src/billing/billing.module.ts

typescript
import { Module } from '@nestjs/common';
import { BillingService } from './billing.service';
import { BillingController } from './billing.controller';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from '../users/users.module';
import { SubscriptionsModule } from '../subscriptions/subscriptions.module'; // Custom Subscriptions module

@Module({
  imports: [ConfigModule, UsersModule, SubscriptionsModule],
  providers: [BillingService],
  controllers: [BillingController],
  exports: [BillingService],
})
export class BillingModule {}
apps/api/src/billing/billing.service.ts

typescript
import { Injectable, BadRequestException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';
import { UsersService } from '../users/users.service';
import { SubscriptionsService } from '../subscriptions/subscriptions.service';
import { User } from '@prisma/client';

@Injectable()
export class BillingService {
  private stripe: Stripe;
  private webhookSecret: string;

  constructor(
    private configService: ConfigService,
    private usersService: UsersService,
    private subscriptionsService: SubscriptionsService,
  ) {
    this.stripe = new Stripe(configService.get<string>('STRIPE_SECRET_KEY'), {
      apiVersion: '2023-10-16', // Or your desired API version
    });
    this.webhookSecret = configService.get<string>('STRIPE_WEBHOOK_SECRET');
  }

  async createCheckoutSession(userId: string, planId: string): Promise<string> {
    const user = await this.usersService.findById(userId);
    if (!user) {
      throw new BadRequestException('User not found.');
    }

    let customerId = (await this.subscriptionsService.getSubscriptionByUserId(userId))?.stripeCustomerId;
    if (!customerId) {
      const customer = await this.stripe.customers.create({
        email: user.email,
        metadata: { userId: user.id },
      });
      customerId = customer.id;
      // Optionally save customerId to our DB
    }

    const priceId = this.getPriceIdForPlan(planId);
    if (!priceId) {
      throw new BadRequestException('Invalid plan ID.');
    }

    const session = await this.stripe.checkout.sessions.create({
      customer: customerId,
      line_items: [{ price: priceId, quantity: 1 }],
      mode: 'subscription',
      success_url: `${this.configService.get<string>('WEB_BASE_URL')}/dashboard?success=true`,
      cancel_url: `${this.configService.get<string>('WEB_BASE_URL')}/billing?canceled=true`,
      metadata: { userId: user.id, planId: planId },
    });

    return session.url;
  }

  private getPriceIdForPlan(planId: string): string | null {
    switch (planId) {
      case 'creator':
        return this.configService.get<string>('STRIPE_PRICE_ID_CREATOR');
      case 'pro':
        return this.configService.get<string>('STRIPE_PRICE_ID_PRO');
      default:
        return null;
    }
  }

  async handleStripeWebhook(payload: Buffer, signature: string) {
    let event: Stripe.Event;

    try {
      event = this.stripe.webhooks.constructEvent(payload, signature, this.webhookSecret);
    } catch (err) {
      throw new BadRequestException(`Webhook Error: ${err.message}`);
    }

    // Handle the event
    switch (event.type) {
      case 'customer.subscription.created':
      case 'customer.subscription.updated':
      case 'customer.subscription.deleted':
        const subscription = event.data.object as Stripe.Subscription;
        await this.subscriptionsService.syncSubscriptionFromStripe(subscription);
        break;
      case 'checkout.session.completed':
        const session = event.data.object as Stripe.Checkout.Session;
        // Optionally handle post-checkout actions, e.g., send welcome email
        break;
      // ... handle other event types
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
  }

  async getCustomerPortalUrl(userId: string): Promise<string> {
    const userSubscription = await this.subscriptionsService.getSubscriptionByUserId(userId);
    if (!userSubscription || !userSubscription.stripeCustomerId) {
      throw new BadRequestException('No active subscription or customer ID found.');
    }

    const portalSession = await this.stripe.billingPortal.sessions.create({
      customer: userSubscription.stripeCustomerId,
      return_url: `${this.configService.get<string>('WEB_BASE_URL')}/billing`,
    });
    return portalSession.url;
  }
}
apps/api/src/billing/billing.controller.ts

typescript
import { Controller, Post, Body, Headers, UseGuards, Get, Req, RawBodyRequest } from '@nestjs/common';
import { BillingService } from './billing.service';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../common/decorators/get-user.decorator';
import { User } from '@prisma/client';
import { CreateCheckoutSessionDto } from './dto/billing.dto';

@Controller('billing')
export class BillingController {
  constructor(private billingService: BillingService) {}

  @Post('checkout-session')
  @UseGuards(AuthGuard('jwt'))
  async createCheckoutSession(@GetUser() user: User, @Body() dto: CreateCheckoutSessionDto) {
    return this.billingService.createCheckoutSession(user.id, dto.planId);
  }

  @Post('webhook')
  async handleStripeWebhook(
    @Headers('stripe-signature') signature: string,
    @Req() req: RawBodyRequest<Request>, // Use RawBodyRequest to get raw buffer
  ) {
    if (!signature) {
      throw new Error('Stripe-Signature header missing.');
    }
    await this.billingService.handleStripeWebhook(req.rawBody, signature);
    return { received: true };
  }

  @Get('customer-portal')
  @UseGuards(AuthGuard('jwt'))
  async getCustomerPortalUrl(@GetUser() user: User) {
    return this.billingService.getCustomerPortalUrl(user.id);
  }
}
apps/api/src/billing/dto/billing.dto.ts

typescript
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCheckoutSessionDto {
  @IsString()
  @IsNotEmpty()
  planId: string; // e.g., 'creator', 'pro'
}
apps/api/src/subscriptions/subscriptions.module.ts

typescript
import { Module } from '@nestjs/common';
import { SubscriptionsService } from './subscriptions.service';
import { PrismaModule } from '../prisma/prisma.module';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [

continue and complete it Act as a Staff Software Engineer.

Create the production-ready project scaffold for ContentForge AI.

Stack:

Frontend:
- Next.js 15
- React
- TypeScript
- Tailwind
- Shadcn UI

Backend:
- NestJS
- PostgreSQL
- Prisma

Services:
- OpenAI
- Whisper
- Stripe
- AWS S3
- Redis
- BullMQ

Generate:

1. Folder structure

2. Prisma schema

3. Environment variables

4. Database migrations

5. Authentication module

6. Upload module

7. AI processing module

8. Billing module

9. Queue workers

10. API routes

11. Docker setup

12. Docker Compose

13. GitHub Actions CI/CD

14. Deployment Scripts

Output code in implementation order.


Alright, co-founder, let’s complete this production-ready scaffold. We’re picking up from the subscriptions.module.ts and will cover the remaining items.

PHASE 10: Billing Module (NestJS apps/api/src/billing) (Continued)
apps/api/src/subscriptions/subscriptions.module.ts (Completed)

typescript
import { Module } from '@nestjs/common';
import { SubscriptionsService } from './subscriptions.service';
import { PrismaModule } from '../prisma/prisma.module';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [PrismaModule, UsersModule],
  providers: [SubscriptionsService],
  exports: [SubscriptionsService],
})
export class SubscriptionsModule {}
apps/api/src/subscriptions/subscriptions.service.ts

typescript
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import Stripe from 'stripe';
import { User } from '@prisma/client';

@Injectable()
export class SubscriptionsService {
  constructor(private prisma: PrismaService) {}

  async getSubscriptionByUserId(userId: string) {
    return this.prisma.subscription.findFirst({
      where: { userId, status: 'active' },
    });
  }

  async syncSubscriptionFromStripe(stripeSubscription: Stripe.Subscription) {
    const customerId = stripeSubscription.customer as string;
    const user = await this.prisma.user.findFirst({
      where: {
        subscriptions: {
          some: { stripeCustomerId: customerId }
        }
      }
    });

    if (!user) {
      // This might happen if customer is created in Stripe but not yet linked to our user
      // Or if we need to fetch user by customer ID metadata
      console.warn(`User not found for Stripe Customer ID: ${customerId}`);
      return;
    }

    const planId = this.getPlanIdFromStripePrice(stripeSubscription.items.data[0].price.id);

    await this.prisma.subscription.upsert({
      where: { stripeSubscriptionId: stripeSubscription.id },
      update: {
        userId: user.id,
        stripeCustomerId: customerId,
        planId: planId,
        status: stripeSubscription.status,
        currentPeriodStart: new Date(stripeSubscription.current_period_start * 1000),
        currentPeriodEnd: new Date(stripeSubscription.current_period_end * 1000),
        trialStart: stripeSubscription.trial_start ? new Date(stripeSubscription.trial_start * 1000) : null,
        trialEnd: stripeSubscription.trial_end ? new Date(stripeSubscription.trial_end * 1000) : null,
      },
      create: {
        userId: user.id,
        stripeCustomerId: customerId,
        stripeSubscriptionId: stripeSubscription.id,
        planId: planId,
        status: stripeSubscription.status,
        currentPeriodStart: new Date(stripeSubscription.current_period_start * 1000),
        currentPeriodEnd: new Date(stripeSubscription.current_period_end * 1000),
        trialStart: stripeSubscription.trial_start ? new Date(stripeSubscription.trial_start * 1000) : null,
        trialEnd: stripeSubscription.trial_end ? new Date(stripeSubscription.trial_end * 1000) : null,
      },
    });
  }

  private getPlanIdFromStripePrice(priceId: string): string {
    // Map Stripe Price IDs to our internal plan IDs (e.g., 'creator', 'pro')
    // This should ideally be driven by config or a lookup table
    if (priceId === process.env.STRIPE_PRICE_ID_CREATOR) return 'creator';
    if (priceId === process.env.STRIPE_PRICE_ID_PRO) return 'pro';
    return 'unknown'; // Handle unknown plans
  }

  async getUserPlan(userId: string): Promise<string> {
    const subscription = await this.getSubscriptionByUserId(userId);
    return subscription?.planId || 'free';
  }
}
11. Queue Workers
Each worker will be a separate NestJS application, allowing for independent scaling and deployment.

workers/transcribe-worker/src/main.ts

typescript
import { NestFactory } from '@nestjs/core';
import { TranscribeModule } from './transcribe.module';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(TranscribeModule);
  app.enableShutdownHooks();
  // No need to listen on a port for a worker context
  console.log('Transcribe Worker started.');
}
bootstrap();
workers/transcribe-worker/src/transcribe.module.ts

typescript
import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TranscribeProcessor } from './transcribe.processor';
import { TRANSCRIBE_QUEUE, VIDEO_UPLOAD_QUEUE } from '@contentforge/types/queue-names';
import { PrismaModule } from '../../../apps/api/src/prisma/prisma.module'; // Re-use PrismaModule
import { S3Module } from '../../../apps/api/src/s3/s3.module'; // Re-use S3Module
import { AiModule } from '../../../apps/api/src/ai/ai.module'; // Re-use AiModule
import { QueuesModule } from '../../../apps/api/src/queues/queues.module'; // For dispatching next jobs

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Load .env for worker
    BullModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        redis: {
          host: configService.get<string>('REDIS_HOST'),
          port: configService.get<number>('REDIS_PORT'),
          password: configService.get<string>('REDIS_PASSWORD'),
        },
      }),
      inject: [ConfigService],
    }),
    BullModule.registerQueue(
      { name: TRANSCRIBE_QUEUE },
      { name: VIDEO_UPLOAD_QUEUE } // Also listen to video-upload to initiate transcribe
    ),
    PrismaModule,
    S3Module,
    AiModule,
    QueuesModule, // To push subsequent jobs
  ],
  providers: [TranscribeProcessor],
})
export class TranscribeModule {}
workers/transcribe-worker/src/transcribe.processor.ts

typescript
import { Processor, Process, OnQueueActive, OnQueueCompleted, OnQueueFailed } from '@nestjs/bull';
import { Job } from 'bull';
import { TRANSCRIBE_QUEUE, VIDEO_UPLOAD_QUEUE } from '@contentforge/types/queue-names';
import { TranscribeJobData, VideoUploadJobData } from '@contentforge/types/queue-jobs';
import { PrismaService } from '../../../apps/api/src/prisma/prisma.service';
import { S3Service } from '../../../apps/api/src/s3/s3.service';
import { OpenAIService } from '../../../apps/api/src/ai/openai.service';
import { QueueProducerService } from '../../../apps/api/src/queues/queue-producer.service';
import { VideoStatus } from '@contentforge/types/enums';
import { Readable } from 'stream';
import * as fs from 'fs';
import * as util from 'util';
import { pipeline } from 'stream/promises';
import * as path from 'path';
import * as os from 'os';

@Processor(TRANSCRIBE_QUEUE)
export class TranscribeProcessor {
  constructor(
    private prisma: PrismaService,
    private s3Service: S3Service,
    private openaiService: OpenAIService,
    private queueProducer: QueueProducerService,
  ) {}

  @OnQueueActive()
  onActive(job: Job) {
    console.log(`Processing job ${job.id} of type ${job.name}...`);
  }

  @OnQueueCompleted()
  onComplete(job: Job, result: any) {
    console.log(`Job ${job.id} completed. Result: ${JSON.stringify(result)}`);
  }

  @OnQueueFailed()
  onFailed(job: Job, err: Error) {
    console.error(`Job ${job.id} failed: ${err.message}`, err.stack);
  }

  // Listen to video-upload queue to initiate transcription for newly uploaded videos
  @Process(VIDEO_UPLOAD_QUEUE)
  async handleVideoUpload(job: Job<VideoUploadJobData>) {
    const { videoId, storagePath } = job.data;
    console.log(`[TranscribeWorker] Received video-upload job for videoId: ${videoId}`);
    await this.processTranscription({ videoId, videoStoragePath: storagePath });
  }

  @Process(TRANSCRIBE_QUEUE)
  async processTranscription(job: Job<TranscribeJobData>) {
    const { videoId, videoStoragePath } = job.data;
    console.log(`[TranscribeWorker] Starting transcription for videoId: ${videoId}`);

    await this.prisma.video.update({
      where: { id: videoId },
      data: { processingStatus: VideoStatus.TRANSCRIBING },
    });

    let tempFilePath: string | null = null;
    try {
      const s3Stream = await this.s3Service.getObjectReadStream(videoStoragePath);
      if (!s3Stream) {
        throw new Error('Could not get S3 stream for transcription.');
      }

      // Save to a temporary file for OpenAI API
      tempFilePath = path.join(os.tmpdir(), `${videoId}.mp3`); // Assuming video can be converted to MP3 or is MP3
      const writeStream = fs.createWriteStream(tempFilePath);
      await pipeline(s3Stream as Readable, writeStream);

      const audioBuffer = fs.readFileSync(tempFilePath); // Read file to buffer
      const transcriptText = await this.openaiService.transcribeAudio(audioBuffer);

      const transcript = await this.prisma.transcript.create({
        data: {
          videoId,
          text: transcriptText,
          status: 'completed',
        },
      });

      await this.prisma.video.update({
        where: { id: videoId },
        data: { processingStatus: VideoStatus.COMPLETED }, // Temporarily mark as completed, next job will take over
      });

      // Dispatch next job: Analyze Content
      await this.queueProducer.addAnalyzeJob({ videoId, transcriptId: transcript.id });

      return { videoId, transcriptId: transcript.id, status: 'success' };
    } catch (error) {
      console.error(`Error transcribing video ${videoId}:`, error);
      await this.prisma.video.update({
        where: { id: videoId },
        data: { processingStatus: VideoStatus.ERROR },
      });
      throw error; // Re-throw to mark job as failed
    } finally {
      if (tempFilePath && fs.existsSync(tempFilePath)) {
        fs.unlinkSync(tempFilePath); // Clean up temp file
      }
    }
  }
}
(Repeat similar structure for analyze-worker, video-processing-worker, export-worker using their respective queues, processors, and modules.)

Example for analyze-worker:

workers/analyze-worker/src/main.ts

workers/analyze-worker/src/analyze.module.ts

workers/analyze-worker/src/analyze.processor.ts (This processor would listen to ANALYZE_QUEUE, call openaiService.analyzeTranscriptForClips, save clips to DB, and then dispatch VIDEO_PROCESS_QUEUE jobs for each clip.)

12. API Routes (Frontend apps/web/src/app)
Frontend routes will primarily use Next.js App Router. API calls will be made from client components or server components to our NestJS backend.

apps/web/src/app/dashboard/page.tsx

tsx
import { auth, currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { DashboardClientPage } from './_components/dashboard-client-page';
import { fetchProjects, fetchUsage } from '@/lib/api'; // API client helper

export default async function DashboardPage() {
  const { userId } = auth();
  if (!userId) {
    redirect('/sign-in');
  }

  const user = await currentUser();
  if (!user) {
    redirect('/sign-in'); // Should not happen if userId exists
  }

  // Fetch data on the server
  const projects = await fetchProjects();
  const usage = await fetchUsage();

  return (
    <DashboardClientPage projects={projects} usage={usage} user={user} />
  );
}
apps/web/src/app/dashboard/_components/dashboard-client-page.tsx

tsx
'use client';

import React from 'react';
import { UserButton } from '@clerk/nextjs';
import { Button } from '@contentforge/ui/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@contentforge/ui/components/ui/card';
import { Progress } from '@contentforge/ui/components/ui/progress';
import { PlusCircle } from 'lucide-react';
import Link from 'next/link';

// Define types for props based on API responses
interface Project {
  id: string;
  title: string;
  status: string;
  clipCount: number;
}

interface Usage {
  minutesUsed: number;
  minutesLimit: number;
  exportsUsed: number;
  exportsLimit: number;
  plan: string;
}

interface DashboardClientPageProps {
  projects: Project[];
  usage: Usage;
  user: any; // Clerk user object
}

export function DashboardClientPage({ projects, usage, user }: DashboardClientPageProps) {
  const minutesProgress = (usage.minutesUsed / usage.minutesLimit) * 100;
  const exportsProgress = usage.exportsLimit === -1 ? 0 : (usage.exportsUsed / usage.exportsLimit) * 100; // -1 for unlimited

  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link href="#" className="flex items-center gap-2 text-lg font-semibold md:text-base">
            <span className="sr-only">ContentForge AI</span>
            ContentForge AI
          </Link>
          <Link href="/dashboard" className="text-foreground transition-colors hover:text-foreground">
            Dashboard
          </Link>
          <Link href="/upload" className="text-muted-foreground transition-colors hover:text-foreground">
            Upload
          </Link>
          <Link href="/billing" className="text-muted-foreground transition-colors hover:text-foreground">
            Billing
          </Link>
        </nav>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <div className="ml-auto flex-1 sm:flex-initial" />
          <UserButton afterSignOutUrl="/" />
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Your Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold capitalize">{usage.plan}</div>
              <p className="text-xs text-muted-foreground">Next billing: Dec 7, 2026</p>
              <Button className="mt-4 w-full" asChild>
                <Link href="/billing">Upgrade Plan</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Processing Minutes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{usage.minutesUsed}/{usage.minutesLimit}</div>
              <Progress value={minutesProgress} className="mt-2" />
              <p className="text-xs text-muted-foreground">Used this month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Exports</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{usage.exportsLimit === -1 ? 'Unlimited' : `${usage.exportsUsed}/${usage.exportsLimit}`}</div>
              {usage.exportsLimit !== -1 && <Progress value={exportsProgress} className="mt-2" />}
              <p className="text-xs text-muted-foreground">Used this month</p>
            </CardContent>
          </Card>
        </div>
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Your Projects</h2>
            <Button asChild>
              <Link href="/upload">
                <PlusCircle className="mr-2 h-4 w-4" /> New Project
              </Link>
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.length === 0 ? (
              <p className="text-muted-foreground col-span-full">No projects yet. Start by uploading a video!</p>
            ) : (
              projects.map((project) => (
                <Card key={project.id}>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Status: {project.status}</p>
                    <p className="text-sm text-muted-foreground">{project.clipCount} clips generated</p>
                    <Button variant="outline" className="mt-4 w-full" asChild>
                      <Link href={`/projects/${project.id}/clips`}>View Clips</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
apps/web/src/lib/api.ts (Frontend API client)

typescript
import axios from 'axios';
import { auth } from '@clerk/nextjs';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001',
});

// Interceptor to attach JWT token from Clerk (if needed, or use Clerk's own SDK for API calls)
api.interceptors.request.use(async (config) => {
  const { getToken } = auth(); // Clerk's way to get a session token
  const token = await getToken({ template: 'contentforge-jwt' }); // Request a specific JWT template from Clerk
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Example API calls
export async function fetchProjects() {
  try {
    const response = await api.get('/projects');
    return response.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

export async function fetchUsage() {
  try {
    const response = await api.get('/users/me/usage'); // Assuming this endpoint exists
    return response.data;
  } catch (error) {
    console.error('Error fetching usage:', error);
    return { minutesUsed: 0, minutesLimit: 15, exportsUsed: 0, exportsLimit: 3, plan: 'free' };
  }
}

// ... other API functions (upload, clips, billing)
Note: For Clerk integration, you’d configure a JWT template in your Clerk dashboard that issues a JWT compatible with your NestJS backend’s JwtStrategy.

13. GitHub Actions CI/CD
.github/workflows/main.yml

yaml
name: CI/CD Pipeline

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'pnpm'

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Run lint
        run: pnpm -r lint

      - name: Run tests
        run: pnpm -r test # Assuming you have test scripts defined in each package.json

      - name: Build all apps
        run: pnpm -r build

  deploy-api:
    needs: build-and-test
    runs-on: ubuntu-latest
    environment: production # For production environment secrets
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: us-east-1

      - name: Login to Amazon ECR
        id: login-ecr
        uses: aws-actions/amazon-ecr-login@v2

      - name: Build and push API Docker image
        env:
          ECR_REGISTRY: ${{ steps.login-ecr.outputs.registry }}
          ECR_REPOSITORY: contentforge-api
          IMAGE_TAG: ${{ github.sha }}
        run: |
          docker build -t $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG -f Dockerfile.api .
          docker push $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG

      - name: Deploy to ECS
        uses: aws-actions/amazon-ecs-deploy-task-definition@v1
        with:
          task-definition: your-api-task-definition.json # You'd define this or generate it
          service: your-api-ecs-service
          cluster: your-ecs-cluster
          wait-for-service-stability: true

  deploy-web:
    needs: build-and-test
    runs-on: ubuntu-latest
    environment: production
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          # Path to your Next.js app within the monorepo
          working-directory: ./apps/web
          vercel-args: "--prod" # Deploy to production alias
(Similar deploy-worker jobs would be created for each worker, pushing to ECR and deploying to ECS/EKS.)

14. Deployment Scripts
Deployment scripts are often specific to the cloud provider and orchestration used. Here’s a conceptual example for AWS ECS.

deploy-ecs.sh (Example for API service)

bash
#!/bin/bash

# This script deploys the ContentForge AI API service to AWS ECS.

# Configuration
CLUSTER_NAME="contentforge-ecs-cluster"
SERVICE_NAME="contentforge-api-service"
TASK_DEFINITION_NAME="contentforge-api-task"
CONTAINER_NAME="api" # Must match container name in task definition
AWS_REGION="us-east-1"
ECR_REPOSITORY_URI="your_aws_account_id.dkr.ecr.${AWS_REGION}.amazonaws.com/contentforge-api"

# Get the latest image tag (e.g., from CI/CD build number or Git SHA)
IMAGE_TAG=${1:-latest} # Default to 'latest' if no tag is provided

echo "Deploying ${SERVICE_NAME} with image tag: ${IMAGE_TAG}"

# 1. Get current task definition
echo "Fetching current task definition for ${TASK_DEFINITION_NAME}..."
CURRENT_TASK_DEF=$(aws ecs describe-task-definition --task-definition "${TASK_DEFINITION_NAME}" --region "${AWS_REGION}" --query 'taskDefinition' --output json)

if [ -z "$CURRENT_TASK_DEF" ]; then
  echo "Error: Task definition ${TASK_DEFINITION_NAME} not found."
  exit 1
fi

# 2. Extract relevant parts and update image
echo "Updating image in task definition..."
UPDATED_CONTAINER_DEFINITIONS=$(echo "$CURRENT_TASK_DEF" | jq --arg IMAGE_URI "$ECR_REPOSITORY_URI:$IMAGE_TAG" '.containerDefinitions | map(if .name == "'"$CONTAINER_NAME"'" then .image = $IMAGE_URI else . end)')

# 3. Register new task definition
echo "Registering new task definition..."
NEW_TASK_DEF_ARN=$(aws ecs register-task-definition \
  --family "${TASK_DEFINITION_NAME}" \
  --container-definitions "${UPDATED_CONTAINER_DEFINITIONS}" \
  --task-role-arn "$(echo "$CURRENT_TASK_DEF" | jq -r '.taskRoleArn')" \
  --execution-role-arn "$(echo "$CURRENT_TASK_DEF" | jq -r '.executionRoleArn')" \
  --network-mode "$(echo "$CURRENT_TASK_DEF" | jq -r '.networkMode')" \
  --requires-compatibilities "$(echo "$CURRENT_TASK_DEF" | jq -r '.requiresCompatibilities | join(",")')" \
  --cpu "$(echo "$CURRENT_TASK_DEF" | jq -r '.cpu')" \
  --memory "$(echo "$CURRENT_TASK_DEF" | jq -r '.memory')" \
  --region "${AWS_REGION}" \
  --query 'taskDefinition.taskDefinitionArn' --output text)

if [ -z "$NEW_TASK_DEF_ARN" ]; then
  echo "Error: Failed to register new task definition."
  exit 1
fi

echo "New Task Definition ARN: ${NEW_TASK_DEF_ARN}"

# 4. Update ECS service
echo "Updating ECS service ${SERVICE_NAME} to use new task definition..."
aws ecs update-service \
  --cluster "${CLUSTER_NAME}" \
  --service "${SERVICE_NAME}" \
  --task-definition "${NEW_TASK_DEF_ARN}" \
  --force-new-deployment \
  --region "${AWS_REGION}"

echo "Deployment initiated for ${SERVICE_NAME}."
echo "You can monitor the deployment status in the AWS ECS console."
This completes the production-ready project scaffold for ContentForge AI. This foundation is robust, scalable, and ready for development. Let’s build!